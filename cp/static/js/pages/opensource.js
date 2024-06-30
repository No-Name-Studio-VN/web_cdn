(()=>{var t=window.location.href;$.ajax({url:t+"/data",method:"GET",contentType:"application/json",success:async function(t){$("#oss_box").html(`
      <div class="table-responsive">
        <div id="oss_table_toolbar"></div>
        <table class="table align-middle text-nowrap" id="oss_table" data-flat="true">
          <thead class="header-item">
            <tr>
              <th data-field="name" data-sortable="true" scope="col">Name</th>
              <th data-field="version" data-sortable="true" scope="col">Version</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>`);t=t.data;$("#oss_table").bootstrapTable({...window.CustomBT_Config,cookieIdTable:"oss_table",toolbar:"#oss_table_toolbar",data:t})},error:function(t){NotificationHandler.show({content:t.responseJSON.error,type:"error"})}})})();