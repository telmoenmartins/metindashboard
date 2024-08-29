import{as as M,at as p}from"./index-_qb0jx07.js";/*! vue-countdown v2.1.2 | (c) 2018-present Chen Fengyuan | MIT */const o=1e3,n=60*o,a=60*n,r=24*a,u="abort",d="end",c="progress",m="start",f="visibilitychange";var S=M({name:"VueCountdown",props:{autoStart:{type:Boolean,default:!0},emitEvents:{type:Boolean,default:!0},interval:{type:Number,default:1e3,validator:t=>t>=0},now:{type:Function,default:()=>Date.now()},tag:{type:String,default:"span"},time:{type:Number,default:0,validator:t=>t>=0},transform:{type:Function,default:t=>t}},emits:[u,d,c,m],data(){return{counting:!1,endTime:0,totalMilliseconds:0,requestId:0}},computed:{days(){return Math.floor(this.totalMilliseconds/r)},hours(){return Math.floor(this.totalMilliseconds%r/a)},minutes(){return Math.floor(this.totalMilliseconds%a/n)},seconds(){return Math.floor(this.totalMilliseconds%n/o)},milliseconds(){return Math.floor(this.totalMilliseconds%o)},totalDays(){return this.days},totalHours(){return Math.floor(this.totalMilliseconds/a)},totalMinutes(){return Math.floor(this.totalMilliseconds/n)},totalSeconds(){return Math.floor(this.totalMilliseconds/o)}},watch:{$props:{deep:!0,immediate:!0,handler(){this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.autoStart&&this.start()}}},mounted(){document.addEventListener(f,this.handleVisibilityChange)},beforeUnmount(){document.removeEventListener(f,this.handleVisibilityChange),this.pause()},methods:{start(){this.counting||(this.counting=!0,this.autoStart||(this.totalMilliseconds=this.time,this.endTime=this.now()+this.time),this.emitEvents&&this.$emit(m),document.visibilityState==="visible"&&this.continue())},continue(){if(!this.counting)return;const t=Math.min(this.totalMilliseconds,this.interval);if(t>0){let i,e;const l=s=>{i||(i=s),e||(e=s);const h=s-i;h>=t||h+(s-e)/2>=t?this.progress():this.requestId=requestAnimationFrame(l),e=s};this.requestId=requestAnimationFrame(l)}else this.end()},pause(){cancelAnimationFrame(this.requestId)},progress(){this.counting&&(this.update(),this.emitEvents&&this.totalMilliseconds>0&&this.$emit(c,{days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}),this.continue())},abort(){this.counting&&(this.pause(),this.counting=!1,this.emitEvents&&this.$emit(u))},end(){this.counting&&(this.pause(),this.totalMilliseconds=0,this.counting=!1,this.emitEvents&&this.$emit(d))},update(){this.counting&&(this.totalMilliseconds=Math.max(0,this.endTime-this.now()))},restart(){this.pause(),this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.counting=!1,this.start()},handleVisibilityChange(){switch(document.visibilityState){case"visible":this.update(),this.continue();break;case"hidden":this.pause();break}}},render(){return p(this.tag,this.$slots.default?[this.$slots.default(this.transform({days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}))]:void 0)}});function E(t,i){new window.Notification(t,{body:i})}const g={showNotification:E};export{S as i,g as n};
