$(function(){var t;$("#search-input").on("keyup",function(){var t=$(this).val().toLowerCase();$(".module-box").filter(function(){$(this).toggle(-1<$(this).text().toLowerCase().indexOf(t))})}),"completed"!==localStorage.getItem("dashboard_intro")&&((t=new Shepherd.Tour({defaultStepOptions:{scrollTo:{behavior:"smooth",block:"center"},cancelIcon:{enabled:!0}},useModalOverlay:!0})).addStep({title:"Welcome to No Name Bot Dashboard",text:"You can find most of things to help personalize bot behaviours and manage your guild here.",attachTo:{element:".page-wrapper"},buttons:[{action(){return this.cancel()},classes:"btn btn-sm btn-label-secondary shepherd-button-secondary",text:"Skip"},{action(){return this.next()},classes:"btn btn-sm btn-primary btn-next",text:"Next"}],id:"creating"}),t.addStep({title:"This is the navbar",text:"From here, you can quickly access many features of the dashboard.      Go to your profile, use the quick search, access your profile settings, toggle dark mode, etc...",attachTo:{element:".app-header",on:"bottom"},buttons:[{action(){return this.cancel()},classes:"btn btn-sm btn-label-secondary shepherd-button-secondary",text:"Skip"},{action(){return this.back()},classes:"btn btn-sm btn-label-secondary shepherd-button-secondary",text:"Back"},{action(){return this.next()},classes:"btn btn-sm btn-primary btn-next",text:"Next"}],id:"step1"}),t.addStep({title:"And here is sidebar",text:"This contains sections of your guild's configuration.",attachTo:{element:".left-sidebar",on:"right"},buttons:[{action(){return this.cancel()},classes:"btn btn-sm btn-label-secondary shepherd-button-secondary",text:"Skip"},{action(){return this.back()},classes:"btn btn-sm btn-label-secondary shepherd-button-secondary",text:"Back"},{action(){return this.next()},classes:"btn btn-sm btn-primary btn-next",text:"Next"}],id:"step2"}),t.addStep({title:"Guilds quick navigator",text:"If you are managing more than one server, this may help a lot. You can quickly open another guild's setting in the same panel.      No need to feel painful anymore 😮‍💨",attachTo:{element:"#guildsidebardetail",on:"right"},buttons:[{action(){return this.cancel()},classes:"btn btn-sm btn-label-secondary shepherd-button-secondary",text:"Skip"},{action(){return this.back()},classes:"btn btn-sm btn-label-secondary shepherd-button-secondary",text:"Back"},{action(){return this.cancel()},classes:"btn btn-sm btn-primary btn-next",text:"Finish"}],id:"step3"}),t.start(),["complete","cancel"].forEach(t=>Shepherd.on(t,()=>{localStorage.setItem("dashboard_intro","completed")})))});