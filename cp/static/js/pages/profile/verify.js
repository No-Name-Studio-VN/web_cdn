(()=>{const a=$("#verify_state");$.ajax({url:window.location.pathname+"/data",method:"GET",contentType:"application/json",success:function(t){var t=t.data,e=0<Object.keys(t).length;if(a.removeClass("bg-primary").addClass(e?"bg-success":"bg-danger").html('<i class="ti ti-'+(e?"check":"x")+' text-white fs-7"></i>'),t?.metadata){const s=$("#metadata_holder");t.metadata.forEach(t=>{s.append(`
            <div class="row">
              <div class="col-12">
                <div class="d-flex align-items-center justify-content-between">
                  <div class="">
                    <h4 class="card-title">${t.name}</h5>
                    <h6 class="card-subtitle text-muted">${t.description}</h6>
                  </div>
                  <div class="list-unstyled d-flex align-items-center justify-content-center justify-content-lg-start gap-3">
                    <div class="round rounded bg-success d-flex align-items-center justify-content-center">
                      <i class="ti ti-check text-white fs-7"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `)})}},error:function(t){logger.error(t)}})})();