(async () => {
    const fileId = window.location.pathname.split('/').pop();

    const downloadBtn = $("#download-btn");
    const $fileContainer = $('#fileContainer');
    const $viewer = $('#file-viewer');
    const $loading = $('#loading');
    const $fileuploadedtime = $('#file-uploadedtime');
    const $fileInfo = $('#file-info');
    const $userInfo = $('#user-info');
    const paymentModal = $('#paymentModal');
    const paymentModalTitle = $('#paymentModalTitle');
    const paymentModalbody = $('#paymentModalbody');
    const paymentModalfooter = $('#paymentModalfooter');

    const getTimeUploaded = (timestamp) => {
        return moment(timestamp).fromNow();
    };

    const createNoDocumentElement = () => `
    <div class="col-12 text-center p-5">
      <h2 class="mb-4 fw-normal">Không tìm thấy tài liệu</h2>
    </div>`;

    const createFileInfoElement = (key, config, data) => `
        <div class="d-flex align-items-center">
            <i class="ti ${config.icon} me-2"></i>
            <span id="file-${key}">${data ? config.getValue(data) : config.default}</span>
        </div>
    `;

    const handleFilePreview = (data) => {
        if (!data.fileUrl) return $viewer.html('<div class="text-center p-5">Trình duyệt của bạn không hỗ trợ xem tệp tin này.</div>');

        if (data.fileType?.startsWith('image/')) {
            $viewer.html(`<img src="${data.fileUrl}" class="img-fluid" alt="${data.fileTitle}">`);
            return;
        }

        if (OFFICE_FORMATS.has(data.fileType)) {
            const viewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(data.fileUrl)}`;
            $viewer.html(`
                <iframe 
                    src="${viewerUrl}" 
                    width="100%" 
                    height="600px" 
                    frameborder="0"
                    onerror="this.parentElement.innerHTML='<div class=\'text-center p-5\'>Trình duyệt của bạn không hỗ trợ xem tệp tin này.</div>'"
                ></iframe>
            `);
            return;
        }

        if (data.fileType === 'application/pdf') {
            $viewer.html(`<object data="${data.fileUrl}" type="application/pdf" width="100%" height="600px"><p>Trình duyệt của bạn không hỗ trợ xem tệp tin này.</p></object>`);
            return;
        }

        $viewer.html('<div class="text-center p-5">Trình duyệt của bạn không hỗ trợ xem tệp tin này.</div>');
    };

    const showModal = (title, content, footer) => {
        paymentModalTitle.text(title);
        paymentModalbody.html(content);
        paymentModalfooter.html(footer);
        paymentModal.modal('show');
    };

    const performDownload = async (fileId) => {
        const fileDownloadUrl = `/api/files/${fileId}/download`;
        try {
            const response = await fetch(fileDownloadUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const blob = await response.blob();
            const filename = response.headers.get('Content-Disposition')?.includes('filename="')
                ? decodeURIComponent(response.headers.get('Content-Disposition').split('filename="')[1].replace('"', ''))
                : 'download';

            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();

            setTimeout(() => {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 100);

            return true;
        } catch (error) {
            console.error('Download error:', error);
            window.NotificationHandler.show({
                title: "Lỗi tải",
                content: error.message === 'HTTP error! status: 400'
                    ? "Bạn đã hết lượt tải tài liệu. Vui lòng thanh toán để tải thêm tài liệu"
                    : "Đã có lỗi xảy ra khi tải tài liệu, vui lòng thử lại sau",
                type: "error",
            });
            return false;
        }
    };

    const handlePayment = async () => {
        try {
            await $.post("/api/users/@me/payment", { amount: 1 });
            window.NotificationHandler.show({
                title: "Thanh toán thành công",
                content: "Bạn đã mua thêm 1 lượt tải tài liệu",
                type: "success",
            });
            return true;
        } catch (error) {
            window.NotificationHandler.show({
                title: "Lỗi thanh toán",
                content: "Đã có lỗi xảy ra khi thanh toán, vui lòng thử lại sau",
                type: "error",
            });
            return false;
        }
    };

    const handleDownload = async (data) => {
        if (!data.isVerified) {
            showModal(
                'Xác thực tài khoản',
                '<p>Tài khoản của bạn chưa được xác thực. Vui lòng xác thực tài khoản để tải tài liệu.</p>',
                `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                 <a href="/profile" class="btn btn-primary">Xác thực tài khoản</a>`
            );
            return;
        }

        if (data.downloadsRemaining < 1) {
            showModal(
                'Hết lượt tải',
                `
                <div class="alert alert-danger" role="alert"><i class="ti ti-alert-circle me-2"></i>Bạn đã hết lượt tải tài liệu. Vui lòng thanh toán để tải thêm tài liệu.</div>
                <div class="d-flex justify-content-center mb-3">
                    <img style="width: 12rem; height: 12rem; position: relative; display: inline-block; border: .5rem solid var(--body-bg-theme); background: var(--body-bg-theme); border-radius: .5rem;" src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="QR">
                </div>
                <div class="text-center">
                    <h4 class="my-2">Thanh toán 1 lượt tải tài liệu với giá 5000đ</h4>
                    <span class="my-2">Nội dung thanh toán: <strong>Mã sinh viên</strong></span>
                    <input type="file" class="form-control" id="paymentFile" accept=".jpg,.jpeg,.png,.gif,.webp" required>
                </div>
                `,
                `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                 <button type="button" class="btn btn-primary" id="paymentBtn">Thanh toán</button>`
            );

            $('#paymentBtn').one('click', async () => {
                if (await handlePayment()) {
                    handleDownload({ ...data, downloadsRemaining: data.downloadsRemaining + 1 });
                }
            });
            return;
        }

        showModal(
            'Tải tài liệu',
            `<p>Bạn có chắc chắn muốn tải tài liệu này?</p>
             <p>Số lượt tải còn lại: ${data.downloadsRemaining}</p>`,
            `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
             <button type="button" class="btn btn-primary" id="downloadbtn">Xác nhận</button>`
        );

        $('#downloadbtn').one('click', async () => {
            if (await performDownload(fileId)) {
                paymentModal.modal('hide');
            }
            window.ContentHandler.ToggleLoading(downloadBtn, false);
        });
    };

    const updateUI = (data) => {

        if (!data) {
            const noDocumentElement = createNoDocumentElement();
            $fileContainer.html(noDocumentElement);
        }

        $('#file-title').text(data?.fileTitle || 'Untitled');
        $('#likesCount').text(data?.likes || 0);
        $('#dislikesCount').text(data?.dislikes || 0);
        $fileuploadedtime.text(getTimeUploaded(data?.uploadedAt));

        $fileInfo.empty();
        Object.entries(FILE_ATTRIBUTES).forEach(([key, config]) => {
            $fileInfo.append(createFileInfoElement(key, config, data));
        });

        handleFilePreview(data);
        rxjs.fromEvent(downloadBtn, "click").pipe(
            rxjs.tap(() => window.ContentHandler.ToggleLoading(downloadBtn, true)),
            rxjs.debounceTime(1000), // Debounce for 1 seconds
            rxjs.switchMap(async () => {
                try {
                    const { data } = await $.get(`/api/users/@me`);
                    if (!data) {
                        window.location.href = '/login?returnurl=' + encodeURIComponent(window.location.pathname);
                        return;
                    }
                    await handleDownload(data);
                } catch (error) {
                    if (error.status === 401) {
                        window.location.href = '/login?returnurl=' + encodeURIComponent(window.location.pathname);
                    }
                    throw error;
                }
            }),
            rxjs.catchError(error => {
                logger.error(`Error downloading`, error);
                window.NotificationHandler.show({
                    title: "Lỗi tải",
                    content: "Đã có lỗi xảy ra khi tải tài liệu, vui lòng thử lại sau",
                    type: "error",
                });
                return rxjs.EMPTY;
            }),
            rxjs.finalize(() => window.ContentHandler.ToggleLoading(downloadBtn, false))
        ).subscribe();

        $.get(`/api/users/${data.uploadedBy}`).then(({ data }) => {
            if (!data) return;

            $userInfo.html(`
                <div class="d-flex align-items-center">
                    <i class="ti ti-user me-2"></i>
                    <span>${data.displayName}</span>
                </div>
                <div class="d-flex align-items-center">
                    <i class="ti ti-id me-2"></i>
                    <span>${data.studentId}</span>
                </div>
                <div class="d-flex align-items-center">
                    <i class="ti ti-building me-2"></i>
                    <span>${data.department}</span>
                </div>
                <div class="d-flex align-items-center">
                    <i class="ti ti-school me-2"></i>
                    <span>${data.course}</span>
                </div>
            `);
        });
    };

    try {
        const { data } = await $.get(`/api/files/${fileId}`);
        updateUI(data);
    } catch (error) {
        logger.error('Error loading file:', error);
        updateUI(null);
    } finally {
        $loading.hide();
    }
})();