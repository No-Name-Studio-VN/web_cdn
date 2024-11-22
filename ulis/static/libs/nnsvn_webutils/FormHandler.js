((global) => {
    // Prevent enter key from submitting form
    function PreventEnterFromSubmitting() {
        document.querySelectorAll("form").forEach((r, i) => {
            r.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.code === 'Enter') {
                    e.preventDefault();
                }
            });
        });
    }

    function allowEnterKeyToEndLine() {
        document.querySelectorAll("form textarea").forEach(textarea => {
            textarea.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.code === 'Enter') {
                    e.preventDefault();
                    const start = this.selectionStart;
                    const end = this.selectionEnd;
                    const value = this.value;
                    this.value = value.substring(0, start) + "\n" + value.substring(end);
                    this.selectionStart = this.selectionEnd = start + 1;
                }
            });
        });
    }

    // Validate Form
    function initializeFormValidation() {
        const forms = document.querySelectorAll('.needs-validation');
        
        const validateForm = (event) => {
            const form = event.target;
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        };
    
        forms.forEach(form => {
            form.addEventListener('submit', validateForm, false);
        });
    }

    function InitializeFormWatcher() {
        // Check if form changed
        const currentForm = $("form");
        const controlFooter = $("#control-footer");

        // If we see no form and there is no element with class name btn_true, stop checking for form here
        if (currentForm.length == 0 || $(".btn_true").length === 0) return;

        // Initialize default value for that form
        const default_formValue = currentForm.serialize();

        // Initialize default value of each elements
        currentForm.find('*').each(function (i, elem) {
            const input = $(elem);
            if (elem.type === "checkbox" || this.type === "radio") {
                input.data('initialState', parseCheckboxValue(elem.checked));
            } else {
                input.data('initialState', input.val());
            }
        });

        // If user changes the value, will check if value is the same as the former and then display confirm popup
        currentForm.off('input', '*').on('input', '*', function (vl) {
            const isFormChanged = () => currentForm.serialize() !== default_formValue;

            controlFooter.toggleClass("show", isFormChanged());
            window.onbeforeunload = () => isFormChanged() ? "You have unsaved changes!" : undefined;
        });

        // Revert changes if user press the dismiss button
        $("#dismiss_form_changes").off("click").on("click", function (e) {
            currentForm.find('*').each(function (i, elem) {
                const input = $(elem);

                // If element is a checkbox then we need to manually check it
                if (elem.type === "checkbox" || elem.type === "radio") elem.checked = input.data('initialState');
                else input.val(input.data('initialState')).trigger("change");
            });
            controlFooter.removeClass("show");
            window.onbeforeunload = null;
        });

        // remove the alert when user submit the form
        currentForm.on('submit', function (e) {
            window.onbeforeunload = null;
        });
    }

    /** Parse checkbox value to boolean
     * @param {any} value 
     * @returns {boolean}
     */
    function parseCheckboxValue(value) {
        return value === "on" || value === "true" || value === true;
    }

    global.FormHandler = {
        InitializeFormWatcher
    };

    global.addEventListener('DOMContentLoaded', async function () {
        PreventEnterFromSubmitting();
        initializeFormValidation();
        await InitializeFormWatcher();
        allowEnterKeyToEndLine();
    });
})(window);