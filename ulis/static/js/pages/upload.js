const UploadForm = {
    constants: window.ULISconstant,

    initializeSelect(elementId, options) {
        const select = document.getElementById(elementId);
        if (!select) return;
        options.forEach(option => select.add(new Option(option, option)));
    },

    initializeUploader() {
        const file = $("#fileupload");
        const footerTemplate = '<div class="file-thumbnail-footer" style ="height:94px">\n' +
            '  <input class="kv-input kv-new form-control input-sm form-control-sm text-center {TAG_CSS_NEW} file-name" value="{caption}" placeholder="Enter file name...">\n' +
            '   <div class="small" style="margin:15px 0 2px 0">{size}</div> {progress}\n{indicator}\n{actions}\n' +
            '</div>';

        file.fileinput({
            language: "vi",
            showPreview: true,
            showUpload: false, // Disable auto upload
            uploadUrl: null, // Remove upload URL
            browseOnZoneClick: true,
            layoutTemplates: { footer: footerTemplate },
            maxFileSize: 1024 * 100,
            elErrorContainer: '#kartik-file-errors',
            allowedFileExtensions: ["doc", "docx", "pdf", "ppt", "pptx", "xls", "xlsx", "png", "jpg", "jpeg"],
        });
    },

    initialize() {
        // Initialize all select elements
        this.initializeSelect("type", this.constants.types);
        this.initializeSelect("department", this.constants.departments);
        this.initializeSelect("school_year", this.constants.schoolYears);

        // Initialize form handler
        FormHandler.InitializeFormWatcher();

        // Initialize Turnstile
        window.addEventListener("DOMContentLoaded", () => {
            turnstile.render('#loadverify', {
                sitekey: '0x4AAAAAAAFZF3YYiB8JTQ4R'
            });
        });

        this.initializeWizard();
        this.initializeFormValidation();
        this.initializeSubmitHandler();
        this.initializeUploader();
    },

    initializeWizard() {
        const form = $(".validation-wizard").show();
        form.steps({
            headerTag: "h6",
            bodyTag: "section",
            transitionEffect: "fade",
            titleTemplate: '<span class="step">#index#</span> #title#',
            labels: { finish: "Đăng tải" },
            onStepChanging: (event, currentIndex, newIndex) => {
                if (currentIndex > newIndex) return true;
                form.find(`.body:eq(${newIndex}) label.error`).remove();
                form.find(`.body:eq(${newIndex}) .error`).removeClass("error");
                form.validate().settings.ignore = ":disabled,:hidden";
                return form.valid();
            },
            onFinishing: () => {
                form.validate().settings.ignore = ":disabled";
                return form.valid();
            },
            onFinished: () => $('#confirmModal').modal('show')
        });
    },

    initializeFormValidation() {
        $(".validation-wizard").validate({
            ignore: "input[type=hidden]",
            errorClass: "invalid-feedback",
            successClass: "text-success",
            highlight: (element, errorClass) => $(element).removeClass(errorClass),
            unhighlight: (element, errorClass) => $(element).removeClass(errorClass),
            errorPlacement: (error, element) => error.insertAfter(element),
            rules: { email: { email: true } }
        });
    },

    initializeSubmitHandler() {
        const uploadBtn = $("#submitform");
        rxjs.fromEvent(uploadBtn, "click").pipe(
            rxjs.tap(() => window.ContentHandler.ToggleLoading(uploadBtn, true)),
            rxjs.debounceTime(1000), // Debounce for 1 seconds
            rxjs.switchMap(async () => {
                const form = document.getElementById("addsub_form");

                if (!form?.checkValidity()) {
                    form.classList.add('was-validated');
                    return;
                }
    
                try {
                    const formData = new FormData(form);
                    
                    // Add file data to FormData
                    const fileInput = $("#fileupload")[0];
                    if (fileInput.files.length > 0) {
                        formData.append('file', fileInput.files[0]);
                    }
    
                    const response = await fetch(form.getAttribute("action"), {
                        method: "POST",
                        body: formData // Remove JSON.stringify and Content-Type header to allow file upload
                    });
    
                    if (!response.ok) throw await response.json();
    
                    window.NotificationHandler.show({
                        type: 'success',
                        content: 'Tai liệu đã được đăng tải thành công',
                        title: 'Đăng tải thành công'
                    });
    
                    // redirect to the file page
                    const { data } = await response.json();
                    window.location.href = `/files/file/${data._id}`;
                    
                } catch (err) {
                    window.NotificationHandler.show({
                        type: 'error',
                        content: err.error,
                        title: 'Đăng tải thất bại'
                    });
                    $('#confirmModal').modal('hide');
                }
            }),
            rxjs.catchError(error => {
              logger.error(`Error uploading`, error);
              window.NotificationHandler.show({
                title: "Lỗi đăng tải",
                content: "Đã có lỗi xảy ra khi đăng tải tài liệu, vui lòng thử lại sau",
                type: "error",
              });
              return [];
            }),
            rxjs.tap(() => window.ContentHandler.ToggleLoading(uploadBtn, false))
          ).subscribe();
    }
};

// Initialize the form
UploadForm.initialize();