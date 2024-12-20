let calendarsEvents={Danger:"danger",Success:"success",Primary:"primary",Warning:"warning"};InjectCSS(`
.calendar-container {
    padding: 30px 30px;
    background-color: var(--bs-primary);
    border-radius: 8px;
    border: 1px solid #e0e6ed
}

.app-calendar .fc .fc-daygrid-day-frame {
    max-height: 90px
}

.app-calendar .fc-event-title {
    font-weight: 600
}

.app-calendar .fc-toolbar-title {
    color: var(--bs-primary);
    font-size: 18px
}

.app-calendar .fc-daygrid-event {
    border-radius: 4px 20px 20px 4px
}

.app-calendar .fc .fc-col-header-cell-cushion,
.app-calendar .fc .fc-daygrid-day-number {
    color: var(--bs-body-color-rgb);
    text-decoration: none
}

.app-calendar .fc .fc-button-primary {
    background-color: var(--bs-gray-100);
    border-color: var(--bs-gray-100);
    letter-spacing: 1px;
    font-size: 14px;
    color: var(--bs-heading-color)
}

.app-calendar .fc .fc-button-primary:not(:disabled).fc-button-active {
    background-color: var(--bs-dark);
    font-weight: 400;
    border-color: var(--bs-dark);
    color: #fff
}

.app-calendar .fc .fc-button-primary:hover {
    background-color: var(--bs-dark);
    color: var(--bs-white);
    border-color: var(--bs-dark)
}

.app-calendar .fc .fc-button-primary:not(:disabled):active {
    background-color: var(--bs-border-color);
    border-color: var(--bs-border-color)
}

.app-calendar .fc .fc-button-primary:focus {
    box-shadow: none !important
}

.app-calendar .fc .fc-button-primary:active:focus {
    box-shadow: none !important
}

.app-calendar .fc .fc-list-sticky .fc-list-day>* {
    background-color: var(--bs-white)
}

.app-calendar .fc .fc-daygrid-body {
    width: 100% !important
}

.app-calendar .fc .fc-scrollgrid-section table {
    width: 100% !important
}

.app-calendar .fc .fc-scrollgrid-section-body table {
    width: 100% !important
}

.app-calendar .fc .fc-button {
    border-radius: 12px;
    padding: 7px 20px;
    text-transform: capitalize;
    color: var(--bs-heading-color)
}

.app-calendar .fc .fc-button:hover {
    background-color: var(--bs-gray-300);
    color: var(--bs-dark);
    border-color: var(--bs-gray-300)
}

.app-calendar .fc .fc-next-button {
    border-radius: 0 12px 12px 0
}

.app-calendar .fc .fc-prev-button {
    border-radius: 12px 0 0 12px
}

.app-calendar .fc .fc-next-button,
.app-calendar .fc .fc-prev-button {
    padding: 7px 10px
}

.app-calendar .fc .fc-toolbar>*>:not(:first-child) {
    margin-left: 4px !important
}

.app-calendar .fc .fc-addEventButton-button {
    background-color: var(--bs-primary);
    border-color: var(--bs-primary);
    color: var(--bs-white);
    font-weight: 400;
    margin-left: 12px !important
}

.app-calendar .fc .fc-addEventButton-button:hover {
    background-color: var(--bs-dark);
    border-color: var(--bs-dark);
    box-shadow: none;
    color: var(--bs-white)
}

.app-calendar .fc .fc-addEventButton-button:not(:disabled):active {
    background-color: var(--bs-primary);
    box-shadow: none;
    color: var(--bs-white)
}

.app-calendar .fc .fc-daygrid-day.fc-day-today {
    background-color: transparent;
    padding: 3px;
    border-radius: 23px
}

.app-calendar .fc .fc-daygrid-day.fc-day-today .fc-daygrid-day-frame {
    background-color: var(--bs-gray-100);
    border-radius: 8px
}

.app-calendar .fc .fc-daygrid-day.fc-day-today .fc-daygrid-day-frame .fc-daygrid-day-number {
    font-size: 15px;
    font-weight: 800
}

.app-calendar .fc .fc-list-event:hover td {
    background-color: var(--bs-gray-100)
}

.app-calendar .fc-theme-standard .fc-list-day-cushion {
    background-color: var(--bs-white)
}

.app-calendar .fc-theme-standard .fc-list {
    border: 1px solid var(--bs-border-color)
}

.app-calendar .fc-theme-standard .fc-scrollgrid {
    border: 0 solid var(--bs-border-color);
    border-width: 0
}

.app-calendar .fc-theme-standard td {
    border: 1px solid var(--bs-border-color)
}

.app-calendar .fc-theme-standard th {
    border: 1px solid var(--bs-border-color);
    border-bottom: 0;
    border-width: 0;
    height: 56px;
    background-color: var(--bs-gray-100);
    vertical-align: middle;
    color: #526b7a
}

.app-calendar .fc-v-event .fc-event-main {
    color: var(--bs-gray-200)
}

.app-calendar .fc-timegrid-event-harness-inset .fc-timegrid-event {
    box-shadow: none
}

.app-calendar .fc-timegrid-event.fc-event-mirror {
    box-shadow: none
}

.app-calendar .fc-timegrid-more-link {
    box-shadow: none
}

.app-calendar .event-fc-color {
    background-color: var(--bs-secondary-bg-subtle);
    border-width: 0 0 0 4px;
    border-style: solid;
    padding: 8px 10px;
    margin-bottom: 1px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer
}

.app-calendar .event-fc-color:hover {
    background-color: var(--bs-gray-100)
}

.app-calendar .fc-daygrid-event-dot {
    margin: 0 6px 0 0
}

.app-calendar .fc-bg-primary {
    color: var(--bs-primary);
    background-color: var(--bs-primary-bg-subtle);
    border-color: var(--bs-primary)
}

.app-calendar .fc-bg-primary .fc-daygrid-event-dot {
    border-color: var(--bs-primary)
}

.app-calendar .fc-bg-primary.fc-h-event .fc-event-main {
    color: var(--bs-primary)
}

.app-calendar .fc-bg-success {
    color: var(--bs-success);
    background-color: var(--bs-success-bg-subtle);
    border-color: var(--bs-success)
}

.app-calendar .fc-bg-success .fc-daygrid-event-dot {
    border-color: var(--bs-success)
}

.app-calendar .fc-bg-success.fc-h-event .fc-event-main {
    color: var(--bs-success)
}

.app-calendar .fc-bg-warning {
    color: var(--bs-warning);
    background-color: var(--bs-warning-bg-subtle);
    border-color: var(--bs-warning)
}

.app-calendar .fc-bg-warning .fc-daygrid-event-dot {
    border-color: var(--bs-warning)
}

.app-calendar .fc-bg-warning.fc-h-event .fc-event-main {
    color: var(--bs-warning)
}

.app-calendar .fc-bg-danger {
    color: var(--bs-danger);
    background-color: var(--bs-danger-bg-subtle);
    border-color: var(--bs-danger)
}

.app-calendar .fc-bg-danger .fc-daygrid-event-dot {
    border-color: var(--bs-danger)
}

.app-calendar .fc-bg-danger.fc-h-event .fc-event-main {
    color: var(--bs-danger)
}

.app-calendar .btn-update-event {
    display: none
}

@media (max-width: 1199px) {
    .app-calendar .calendar-container {
        padding: 30px 0 0 0
    }

    .app-calendar .fc-theme-standard .fc-list {
        border: none
    }

    .app-calendar .fc .fc-toolbar {
        align-items: center;
        flex-direction: column
    }

    .app-calendar .fc .fc-toolbar.fc-header-toolbar {
        margin-bottom: 50px
    }

    .app-calendar .fc-toolbar-chunk:not(:first-child) {
        margin-top: 35px
    }
}

[data-bs-theme=dark] .app-calendar .event-fc-color:hover,
[data-bs-theme=dark] .app-calendar .fc-theme-standard th {
    background-color: #1f2a3d !important
}

[data-bs-theme=dark] .app-calendar .fc .fc-button-primary {
    background-color: var(--bs-body-bg-dark);
    border-color: #313e54
}

[data-bs-theme=dark] .app-calendar .fc .fc-addEventButton-button {
    background-color: var(--bs-primary);
    border-color: var(--bs-primary)
}

[data-bs-theme=dark] .app-calendar .fc .fc-daygrid-day.fc-day-today .fc-daygrid-day-frame {
    background-color: #1a2537
}
    
`);