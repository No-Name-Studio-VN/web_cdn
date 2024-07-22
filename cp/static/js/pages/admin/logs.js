function formatBadge(e,t,a){return`<span class="badge text-bg-${"info"===e?"success":"danger"} rounded-pill">${e}</span>`}function formatMessage(e,t,a){return e.replace(/\n\s+/g," ").trim()}(()=>{function a(){return window.innerWidth<=1199}const r=document.querySelector("#calendar"),o=new Date,i=async e=>{try{var t=`
            <div id="logs_holder_loading">
                <div class="d-flex justify-content-center p-5">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">${i18next.t("dashboard.loading")}...</span>
                    </div>
                </div>
            </div>
            <div id="logs_holder" style="display: none!important;">
                <div id="chart" class="mb-3"></div>
                <div class="hr-text hr-text-center">Server Logs</div>
                <div class="table-responsive">
                    <div id="logs_toolbar"></div>
                    <table id="logs_table" data-flat="true">
                        <thead>
                            <tr>
                                <th data-formatter="formatBadge" data-sortable="true" data-field="level">Type</th>
                                <th data-sortable="true" data-field="timestamp">Timestamp</th>
                                <th data-formatter="formatMessage" data-sortable="true" data-field="message">Content</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            `,a=($("#previewModalBody").html(t),$("#previewModal").modal("show"),await $.get("/admin/logs/file/"+e)),r=a.data.matchAll(/(\d{2}:\d{2}:\d{2}) \| (info|error|http|debug): (.*?)(?=\n\d{2}:\d{2}:\d{2} \| |\Z)/gs),o=Array.from(r,([,e,t,a])=>[e,t,a]);const n=[],s=[],d=(o.forEach(([e,t,a])=>{a.startsWith("System Metrics")?s.push({timestamp:e,level:t,message:a}):"http"===t?n.push({timestamp:e,level:t,message:logger.ansiToHtml(a)}):n.push({timestamp:e,level:t,message:a})}),{Memory:[],CPU:[],LoadAvg:[],FreeMemory:[],UsedMemory:[],FreeMemoryPercentage:[]});var i=s.map(({timestamp:e})=>e);s.forEach(({timestamp:a,message:e})=>{e=e.replace(/\n\s+/g," ").trim().slice(16).split(", ").reduce((e,t)=>{var[t,a]=t.split(": ").map(e=>e.trim());return e[t]=a,e},{});Object.entries(e).forEach(([e,t])=>{e in d&&d[e].push({timestamp:a,value:(e=t,parseFloat(e)/(e.includes("MB")?1024:1))})})});var l={series:Object.entries(d).map(([e,t])=>({name:e,data:t.map(e=>e.value)})),chart:{height:600,type:"line",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2},zoom:{enabled:!0},toolbar:{show:!0}},grid:{borderColor:"transparent",padding:{top:0,right:0,bottom:0,left:0}},colors:["var(--bs-primary)"],markers:{size:0},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.12,opacityTo:0,stops:[0,90,100]}},dataLabels:{enabled:!0},stroke:{curve:"smooth"},title:{text:"System Metrics",align:"left",style:{fontSize:"20px",fontWeight:"bold",color:"var(--bs-body-color)"}},xaxis:{categories:i,title:{text:"Time"}},yaxis:{type:"numeric"},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5},tooltip:{theme:"dark"}};$("#logs_table").bootstrapTable({...window.CustomBT_Config,toolbar:"#logs_toolbar",data:n}),new ApexCharts(document.querySelector("#chart"),l).render(),ContentHandler.toggleMainContent("#logs_holder",!0)}catch(e){logger.error("Failed to display preview modal:",e)}};(async()=>{var e=await(async e=>{try{return(await $.ajax({url:e,method:"GET"})).data.map((e,t)=>({id:t+1,title:e.name,start:e.lastModified,end:e.lastModified,extendedProps:{calendar:"Primary"}}))}catch(e){return logger.error("Failed to get data:",e),""}})("/admin/logs/list");const t=new FullCalendar.Calendar(r,{selectable:!0,height:a()?900:1052,initialView:a()?"listWeek":"dayGridMonth",initialDate:`${o.getFullYear()}-${getMonthValue=o.getMonth(),(_getUpdatedMonthValue=getMonthValue+1)<10?"0"+_getUpdatedMonthValue:""+_getUpdatedMonthValue}-07`,headerToolbar:{left:"prev next",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay"},events:e,eventClassNames:function({event:e}){return["event-fc-color fc-bg-"+calendarsEvents[e._def.extendedProps.calendar]]},eventClick:function(e){i(e.event.title)},windowResize:function(e){a()?(t.changeView("listWeek"),t.setOption("height",900)):(t.changeView("dayGridMonth"),t.setOption("height",1052))}});t.render(),ContentHandler.toggleMainContent("#calendar",!0)})()})();