function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const createFileRating = (likes, dislikes) => {
    const total = likes - dislikes;
    const percentage = total > 0 ? (likes / total) * 100 : 100;
    const icon = total >= 0 ? 'ti ti-thumb-up' : 'ti ti-thumb-down';
    const color = total >= 0 ? 'text-success' : 'text-danger';
    return `<span class="${color}"><i class="${icon}"></i> ${percentage.toFixed(0)}%</span>`;
};

function generateAttributeTags(item) {
    return Object.entries(FILE_ATTRIBUTES)
        .map(([key, attr]) => `
            <li class="tag__item">
                <i class="ti ${attr.icon} mr-2"></i>${attr.getValue(item)}
            </li>
        `).join('');
}

function populateFilters() {
    const typeFilter = document.getElementById('type-filter');
    const departmentFilter = document.getElementById('department-filter');
    const yearFilter = document.getElementById('year-filter');

    ULISconstant.types.forEach(type => {
        typeFilter.innerHTML += `<option value="${type}">${type}</option>`;
    });

    ULISconstant.departments.forEach(dept => {
        departmentFilter.innerHTML += `<option value="${dept}">${dept}</option>`;
    });

    ULISconstant.schoolYears.forEach(year => {
        yearFilter.innerHTML += `<option value="${year}">${year}</option>`;
    });
}

async function performSearch(query) {
    const searchResultsContainer = document.getElementById('search-results');
    const typeFilter = document.getElementById('type-filter').value;
    const departmentFilter = document.getElementById('department-filter').value;
    const yearFilter = document.getElementById('year-filter').value;

    if (!query) {
        searchResultsContainer.innerHTML = `<div class="col-12 text-center p-5">
                <h2>Vui lòng nhập từ khóa tìm kiếm</h2>
            </div>`;
        return;
    }

    try {
        const { data } = await $.get(`/api/search/${query}`);
        
        let filteredData = data;
        if (typeFilter) {
            filteredData = filteredData.filter(item => item.type === typeFilter);
        }
        if (departmentFilter) {
            filteredData = filteredData.filter(item => item.department === departmentFilter);
        }
        if (yearFilter) {
            filteredData = filteredData.filter(item => item.schoolYear === yearFilter);
        }

        if (!filteredData.length) {
            searchResultsContainer.innerHTML = `<div class="col-12 text-center p-5">
                <h2 class="mb-4 fw-normal">Tìm kiếm của bạn - <span class="fw-bold">${query}</span> - không khớp với bất kỳ tài liệu nào.</h2>
                <div class="text-start text-muted">
                    <h4>Một số mẹo cho bạn</h4>
                    <ul>
                        <li>Đảm bảo tất cả các từ được viết đúng chính tả</li>
                        <li>Thử các từ khóa khác</li>
                        <li>Gỡ bỏ các bộ lọc tìm kiếm bạn đã đặt</li>
                        <li>Nếu bạn đang tìm kiếm một khóa học, hãy thử tìm bằng mã khóa học</li>
                    </ul>
                </div>
            </div>`;
            return;
        }

        searchResultsContainer.innerHTML = filteredData.map(item => `
        <div class="col-12 mb-3">
            <article class="postcard light blue">
                <a class="postcard__img_link" href="/files/file/${item._id}">
                    <img class="postcard__img" src="${item.previewUrl || client.cdn + "/static/media/nopreview.png"}" alt="${item.fileTitle}" />
                </a>
                <div class="postcard__text t-dark">
                    <h1 class="postcard__title blue"><a href="/files/file/${item._id}">${item.fileTitle}</a></h1>
                    <div class="postcard__subtitle small">
                        <time datetime="${item.uploadedAt}">
                            <i class="ti ti-calendar mr-2"></i>${moment(item.uploadedAt).format('hh/mm - DD/MM/YYYY')}
                        </time>
                        <span class="ms-2"><i class="ti ti-eye mr-2"></i>${item.views || 0}</span>
                        <span class="ms-2">${createFileRating(item.likes, item.dislikes)}</span>
                    </div>
                    <div class="postcard__bar"></div>
                    <div class="postcard__preview-txt">${item.description || "Mô tả không tồn tại"}</div>
                    <ul class="postcard__tagbox">
                        ${generateAttributeTags(item)}
                    </ul>
                </div>
            </article>
        </div>
        `).join('');

    } catch (error) {
        console.error('Error fetching search results:', error);
        searchResultsContainer.innerHTML = '<div class="col-12"><h3>Error loading search results</h3></div>';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-header2');

    // Remove any existing keydown event listeners
    const oldInstance = searchInput.cloneNode(true);
    searchInput.parentNode.replaceChild(oldInstance, searchInput);

    // Set initial value from URL if exists
    oldInstance.value = window.location.pathname.split('/search/')[1] || '';

    const debouncedSearch = debounce((query) => {
        const newUrl = query ? `/search/${query}` : '/search';
        window.history.pushState({}, '', newUrl);
        performSearch(query);
    }, 300);

    oldInstance.addEventListener('input', (e) => {
        debouncedSearch(e.target.value);
    });

    // Perform initial search if there's a query in the URL
    if (oldInstance.value) {
        performSearch(oldInstance.value);
    }

    populateFilters();
    
    // Add filter change listeners
    ['type-filter', 'department-filter', 'year-filter'].forEach(filterId => {
        const elem = $(`#${filterId}`);
        window.ContentHandler.ToggleMultiSelect(elem, {
            isDisabled: false, placeholder: elem.attr('placeholder')
        });
        elem.on('change', () => {
            performSearch(document.getElementById('search-header2').value);
        });
    });
});
