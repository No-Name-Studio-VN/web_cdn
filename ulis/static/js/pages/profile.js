const FormBuilder = {
    buildAttributes: (config) => {
        const attrs = [];
        const {
            id, name = id,
            required = false,
            disabled = false,
            readonly = false,
            pattern,
            minlength,
            maxlength,
            min,
            max,
            step,
            placeholder,
            value = '',
            dataset = {},
            attributes = {}
        } = config;

        // Base attributes
        attrs.push(`id="${id}"`);
        attrs.push(`name="${name}"`);
        if (placeholder) attrs.push(`placeholder="${placeholder}"`);
        if (value) attrs.push(`value="${value}"`);
        
        // Boolean attributes
        if (required) attrs.push('required');
        if (disabled) attrs.push('disabled');
        if (readonly) attrs.push('readonly');

        // Validation attributes
        if (pattern) attrs.push(`pattern="${pattern}"`);
        if (minlength) attrs.push(`minlength="${minlength}"`);
        if (maxlength) attrs.push(`maxlength="${maxlength}"`);
        if (min) attrs.push(`min="${min}"`);
        if (max) attrs.push(`max="${max}"`);
        if (step) attrs.push(`step="${step}"`);

        // Data attributes
        Object.entries(dataset).forEach(([key, value]) => {
            attrs.push(`data-${key}="${value}"`);
        });

        // Custom attributes
        Object.entries(attributes).forEach(([key, value]) => {
            attrs.push(`${key}="${value}"`);
        });

        return attrs.join(' ');
    },

    baseInput: (config) => {
        const { 
            type = 'text',
            label,
            colSize = 9,
            classes = ['form-control'],
            wrapperClasses = ['row', 'mb-4']
        } = config;

        return `
            <div class="${wrapperClasses.join(' ')}">
                <label for="${config.id}" class="col-sm-3 col-form-label form-label">${label}</label>
                <div class="col-sm-${colSize}">
                    <input type="${type}" 
                           class="${classes.join(' ')}"
                           ${FormBuilder.buildAttributes(config)}>
                </div>
            </div>`;
    },

    // Replace existing input methods with simplified versions using baseInput
    textInput: (config) => FormBuilder.baseInput({ ...config, type: 'text' }),
    emailInput: (config) => FormBuilder.baseInput({ ...config, type: 'email' }),
    phoneInput: (config) => FormBuilder.baseInput({ ...config, type: 'tel' }),
    numberInput: (config) => FormBuilder.baseInput({ ...config, type: 'number' }),

    selectInput: (config) => {
        const { 
            id, 
            label, 
            options = [], 
            colSize = 9,
            classes = ['form-select'],
            wrapperClasses = ['row', 'mb-4']
        } = config;

        const optionsHtml = options.map(opt =>
            `<option value="${opt.value}" ${opt.value === config.value ? 'selected' : ''}>${opt.label}</option>`
        ).join('');

        return `
            <div class="${wrapperClasses.join(' ')}">
                <label for="${id}" class="col-sm-3 col-form-label form-label">${label}</label>
                <div class="col-sm-${colSize}">
                    <select class="${classes.join(' ')}" ${FormBuilder.buildAttributes(config)}>
                        <option>${config.placeholder || 'Chọn một lựa chọn'}</option>
                        ${optionsHtml}
                    </select>
                </div>
            </div>`;
    },

    radioGroup: (config) => {
        const { id, label, options = [], value = '' } = config;
        const optionsHtml = options.map(opt => `
            <label class="form-control" for="${id}_${opt.value}">
                <span class="form-check">
                    <input type="radio" 
                           class="form-check-input" 
                           name="${id}" 
                           id="${id}_${opt.value}"
                           value="${opt.value}"
                           ${opt.value === value ? 'checked' : ''}>
                    <span class="form-check-label">${opt.label}</span>
                </span>
            </label>
        `).join('');

        return `
            <div class="row mb-4">
                <label class="col-sm-3 col-form-label form-label">${label}</label>
                <div class="col-sm-9">
                    <div class="input-group input-group-sm-vertical">
                        ${optionsHtml}
                    </div>
                </div>
            </div>`;
    },

    checkbox: (config) => {
        const { id, label, description, checked = false, required = false } = config;
        return `
            <div class="row align-items-center mb-4">
                <label class="col-sm-3 col-form-label form-label">${label}</label>
                <div class="col-sm-9">
                    <div class="form-check">
                        <input class="form-check-input" 
                               type="checkbox" 
                               value="" 
                               id="${id}"
                               name="${id}"
                               ${checked ? 'checked' : ''} ${required ? 'required' : ''}>
                        <label class="form-check-label" for="${id}">${description}</label>
                    </div>
                </div>
            </div>`;
    }
};

// Example usage with enhanced attributes
(() => {
    const formContainer = document.getElementById('formcontent');
    if (!formContainer) return;

    $.get("/api/users/@me", function (res) {
        const { data } = res;
        if (data) {

            if (data.profilePicture) $('#profilePicture').attr('src', data.profilePicture);

            const formContent = [
                FormBuilder.textInput({
                    id: 'displayName',
                    label: 'Họ và tên',
                    required: true,
                    value: data.displayName || '',
                    minlength: 2,
                    maxlength: 50,
                    dataset: {
                        validate: 'name',
                        test: 'value'
                    },
                    attributes: {
                        autocomplete: 'name'
                    }
                }),
                FormBuilder.emailInput({
                    id: 'email',
                    label: 'Email',
                    required: true,
                    value: data.email || '',
                    dataset: {
                        validate: 'email'
                    },
                    readonly: true
                }),
                FormBuilder.phoneInput({
                    id: 'phoneNumber',
                    label: 'Số điện thoại',
                    placeholder: '+x(xxx)xxx-xx-xx',
                    value: data.phoneNumber || '',
                }),
                FormBuilder.numberInput({
                    id: 'studentId',
                    label: 'Mã số sinh viên',
                    placeholder: 'MSSV của bạn',
                    value: data.studentId || '',
                    required: true,
                }),
                FormBuilder.selectInput({
                    id: 'schoolYear',
                    label: 'Khóa',
                    placeholder: 'Chọn khóa',
                    options: [
                        { value: 'QH-2019', label: 'QH-2019' },
                        { value: 'QH-2020', label: 'QH-2020' },
                        { value: 'QH-2021', label: 'QH-2021' },
                        { value: 'QH-2022', label: 'QH-2022' },
                        { value: 'QH-2023', label: 'QH-2023' },
                        { value: 'QH-2024', label: 'QH-2024' },
                        { value: 'QH-2025', label: 'QH-2025' },
                    ],
                    value: data.schoolYear || '',
                    required: true,
                }),
                FormBuilder.selectInput({
                    id: 'department',
                    label: 'Khoa',
                    placeholder: 'Chọn khoa',
                    options: window.ULISconstant.departments.map(department => ({ value: department, label: department })),
                    value: data.department || '',
                    required: true,
                }),
                FormBuilder.textInput({
                    id: 'course',
                    label: 'Ngành học',
                    placeholder: 'Ngành học của bạn',
                    required: true,
                    value: data.course || ''
                }),
                FormBuilder.textInput({
                    id: 'class',
                    label: 'Lớp học',
                    placeholder: 'Lớp học của bạn',
                    required: true,
                    value: data.class || ''
                }),
                FormBuilder.radioGroup({
                    id: 'accountType',
                    label: 'Loại tài khoản',
                    options: [
                        { value: 'student', label: 'Học sinh' },
                        { value: 'teacher', label: 'Giáo viên' }
                    ],
                    value: 'student'
                }),
            ];

            formContainer.innerHTML = formContent.join('');

            FormHandler.InitializeFormWatcher();
        }
    });
})();