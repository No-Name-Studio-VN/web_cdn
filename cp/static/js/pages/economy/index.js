(async()=>{function e(r,e){const t=window.countUp.CountUp,a=e;document.getElementById(r).textContent=0,setTimeout(()=>{var e=new t(r,a,{duration:3});e.error?logger.error(e.error):e.start()},500)}var r=$("#xp_progressbar"),t=$("#requiredXP"),a=await $.ajax({url:"/api/economy/user",dataType:"json"}).then(e=>e.data),o=(n=a.xp,o=.1,Math.floor(o*Math.sqrt(n))+1),{lowerBound:n,upperBound:u}=(n=o,u=.1,{lowerBound:Math.ceil(((n-1)/u)**2),upperBound:Math.ceil((n/u)**2)}),a=u-a.xp,u=u-n;e("currentLevel0",o),e("currentLevel1",o),r.attr({"aria-valuenow":a,"aria-valuemax":u}).css("width",a/u*100+"%"),t.text(a)})();