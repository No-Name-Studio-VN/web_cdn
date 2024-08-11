function formatContent(t,a,n){return`
    <div class="d-flex align-items-center">
        <span class="me-3">
            <span class="p-2 bg-primary icon icon-md fs-7 rounded-4 ti ti-building-store text-white"></span>
        </span>
        <div class="w-75 d-inline-block v-middle">
          <span class="mb-1 fw-semibold fs-4">${t.content}</span>
          <div class="d-block fw-normal fs-2">
            <span nns-dateformatter>${t.timestamp}</span> • ${t.currency} • ${t.location} • ${t.source}
          </div>
        </div>
    </div>
    `}function formatAmount(t){var a=Number(t.amount),n=a<0?"-":"+",e=a<0?"text-danger":"text-success",a=Number.isInteger(a)?a.toFixed(0):a.toString();return`<span class="${e} fw-bold fs-4">${n}$${Math.abs(a)}</span> <span class="d-none">${balance_type[t.type]}</span>`}function searchAmount(t,a,n,e){return!!a.includes(t)}function sortAmount(t,a){return t.amount-a.amount}var balance_type={deposit:"Deposit",withdraw:"Withdraw"};(()=>{$("#transactionsbox").html(`
    <div class="table-responsive">
        <div id="trans_toolbar"></div>
        <table id="trans_table" data-flat="true">
            <thead>
                <tr>
                    <th data-sortable="true" data-field="main" data-formatter="formatContent">Content</th>
                    <th data-sortable="true" data-field="amount" data-formatter="formatAmount" data-filter-control="select" data-filter-data="var:balance_type" data-filter-control-placeholder="Type" data-filter-custom-search="searchAmount" data-sorter="sortAmount">Amount</th>
                </tr>
            </thead>
        </table>
    </div>`);const n=$("#trans_table");function e(){window.ContentHandler.ToggleMultiSelect($(".bootstrap-table-filter-control-amount"),{placeholder:"Type"})}$.get("/economy/transactions/history",function(t){t=t.data.map(t=>({...t,amount:{amount:"withdraw"===t.type?"-"+t.amount:t.amount,type:t.type},main:{content:t.content,source:t.source,timestamp:t.timestamp,currency:t.currency,location:t.location}}));n.bootstrapTable({...window.CustomBT_Config,cookieIdTable:"trans_table",toolbar:"#trans_toolbar",data:t}),e();let a=!1;n.on("toggle.bs.table",()=>{(a=!a)&&setTimeout(e,500)}),window.ContentHandler.ToggleMainContent("#transactionsbox",!0)})})();