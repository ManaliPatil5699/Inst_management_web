(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"6J6T":function(t,e,i){"use strict";i.r(e),i.d(e,"InstituteModule",(function(){return B}));var s=i("ofXK"),n=i("3Pt+"),r=i("tyNb"),o=i("fXoL");let d=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Fb({type:t,selectors:[["app-institute"]],decls:1,vars:0,template:function(t,e){1&t&&o.Mb(0,"router-outlet")},directives:[r.d],styles:[""]}),t})();var a=i("Ebwu"),u=i("TDzt"),c=i("Y4+Y");function l(t,e){1&t&&(o.Qb(0,"div",26),o.uc(1," Institute Name is required "),o.Pb())}function b(t,e){1&t&&(o.Qb(0,"div",27),o.uc(1," Institute Name is not valid. "),o.Pb())}function p(t,e){1&t&&(o.Qb(0,"div",26),o.uc(1," Institute Type is required "),o.Pb())}function f(t,e){1&t&&(o.Qb(0,"div",27),o.uc(1," Institute Type is not valid. "),o.Pb())}function h(t,e){1&t&&(o.Qb(0,"div",26),o.uc(1," Address Line 1 is required "),o.Pb())}function m(t,e){1&t&&(o.Qb(0,"div",27),o.uc(1," Address is not valid. "),o.Pb())}function y(t,e){1&t&&(o.Qb(0,"div",26),o.uc(1," Address Line 2 is required "),o.Pb())}function v(t,e){1&t&&(o.Qb(0,"div",27),o.uc(1," Address is not valid. "),o.Pb())}function g(t,e){if(1&t){const t=o.Rb();o.Qb(0,"li",28),o.Yb("click",(function(){o.mc(t);const i=e.$implicit;return o.ac().filltextBox(i)})),o.uc(1),o.Pb()}if(2&t){const t=e.$implicit;o.Bb(1),o.wc(" ",t.state," ")}}function L(t,e){1&t&&(o.Qb(0,"div",26),o.uc(1," state is required "),o.Pb())}function I(t,e){1&t&&(o.Qb(0,"div",27),o.uc(1," state is not valid. "),o.Pb())}function C(t,e){if(1&t){const t=o.Rb();o.Qb(0,"li",28),o.Yb("click",(function(){o.mc(t);const i=e.$implicit;return o.ac().fillCityBox(i)})),o.uc(1),o.Pb()}if(2&t){const t=e.$implicit;o.Bb(1),o.wc(" ",t," ")}}function P(t,e){1&t&&(o.Qb(0,"div",26),o.uc(1," City is required "),o.Pb())}function w(t,e){1&t&&(o.Qb(0,"div",27),o.uc(1," City is not valid. "),o.Pb())}function F(t,e){1&t&&(o.Qb(0,"div",26),o.uc(1," Pin Code is required "),o.Pb())}function Q(t,e){1&t&&(o.Qb(0,"div",27),o.uc(1," Pin Code should be 6 digits long "),o.Pb())}const U=[{path:"",component:d,children:[{path:"",redirectTo:"update",pathMatch:"full"},{path:"update",component:(()=>{class t{constructor(t,e,i,s,n){this.stateService=t,this.fb=e,this.router=i,this.instituteService=s,this.notification=n,this.State=[],this.StateArray=new Array,this.CityArray=[],this.cityDemo=new Array,this.hideUl=!0,this.hideCity=!0,this.ownerId=" ",this.instituteId=" ",this.disabledBtn=!0,this.institute={instituteName:"",instituteType:"",addressLine1:"",addressLine2:"",state:"",city:"",pinCode:""}}ngOnInit(){const t=localStorage.getItem("ownerId");this.ownerId=t,this.instituteService.findInstituteId({ownerId:this.ownerId}).subscribe(t=>{this.instituteId=t.institute._id,this.setData(t.institute)},t=>{}),this.instituteUpdateForm=this.fb.group({instituteName:[null,n.o.required],instituteType:[null,n.o.required],addressLine1:[null,n.o.required],addressLine2:[null],state:[null,n.o.required],city:[null,n.o.required],pincode:[null,n.o.required]}),this.State=this.stateService.getStates()}completeState(){const t=this.instituteUpdateForm.get("state").value.toLowerCase();if(this.StateArray=[],""!=t)for(let e=0;e<this.State.length;e++)this.State[e].state.toLowerCase().startsWith(t.toLowerCase())&&this.State[e].state.toLowerCase().indexOf(t.toLowerCase())>=0&&(this.hideUl=!1,this.StateArray.push({id:this.State[e].id,state:this.State[e].state}))}completeCity(){const t=this.instituteUpdateForm.get("city").value;if(this.cityDemo=[],""!=t)for(let e=0;e<this.CityArray.length;e++)this.CityArray[e].toLowerCase().startsWith(t.toLowerCase())&&this.CityArray[e].toLowerCase().indexOf(t.toLowerCase())>=0&&(this.hideCity=!1,this.cityDemo.push(this.CityArray[e]))}filltextBox(t){this.instituteUpdateForm.controls.state.setValue(t.state),this.hideUl=!0,this.CityArray=this.stateService.getCity().filter(e=>e.id===t.id)[0].city}fillCityBox(t){this.instituteUpdateForm.controls.city.setValue(t),this.hideCity=!0}setData(t){this.instituteUpdateForm.get("instituteName").setValue(t.instituteName),this.instituteUpdateForm.get("instituteType").setValue(t.instituteType),this.instituteUpdateForm.get("addressLine1").setValue(t.instituteAddressLine1),this.instituteUpdateForm.get("addressLine2").setValue(t.instituteAddressLine2),this.instituteUpdateForm.get("state").setValue(t.state),this.instituteUpdateForm.get("city").setValue(t.city),this.instituteUpdateForm.get("pincode").setValue(t.pincode)}get instituteName(){return this.instituteUpdateForm.get("instituteName")}get instituteType(){return this.instituteUpdateForm.get("instituteType")}get addressLine1(){return this.instituteUpdateForm.get("addressLine1")}get addressLine2(){return this.instituteUpdateForm.get("addressLine2")}get state(){return this.instituteUpdateForm.get("state")}get city(){return this.instituteUpdateForm.get("city")}get pincode(){return this.instituteUpdateForm.get("pincode")}update(){const t={_id:this.instituteId,instituteName:this.instituteUpdateForm.get("instituteName").value,instituteType:this.instituteUpdateForm.get("instituteType").value,instituteAddressLine1:this.instituteUpdateForm.get("addressLine1").value,instituteAddressLine2:this.instituteUpdateForm.get("addressLine2").value,state:this.instituteUpdateForm.get("state").value,city:this.instituteUpdateForm.get("city").value,pincode:this.instituteUpdateForm.get("pincode").value,ownerId:this.ownerId};this.instituteService.updateInstitute(t).subscribe(t=>{this.notification.createNotification("success","Success","Updated successfully","topRight"),this.router.navigate(["/dashboard/course/list"])},t=>{this.notification.createNotification("error","Error","Error in updation","topRight")})}cancel(){this.router.navigate(["/dashboard/course/list"])}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(a.a),o.Lb(n.b),o.Lb(r.b),o.Lb(u.a),o.Lb(c.a))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-institute-update"]],decls:58,vars:22,consts:[[1,"mx-4","my-4","row","justify-content-center","align-items-center"],[1,"col-lg-6","col-md-8","col-sm-12","col-xs-8","shadow"],[1,"formGroup","px-4","py-4",3,"formGroup"],[1,"form-group","text-center"],[1,"mx-auto"],["for","instituteName"],["type","text","pattern","^[a-zA-Z ]*$","formControlName","instituteName",1,"form-control"],["class","text-danger",4,"ngIf"],["style","color: red;",4,"ngIf"],["for","instituteType"],["type","text","pattern","^[a-zA-Z ]*$","formControlName","instituteType",1,"form-control"],["for","addressLine1"],["type","text","pattern","^(\\w*\\s*[\\#\\-\\,\\/\\.\\(\\)\\&]*)+","formControlName","addressLine1",1,"form-control"],["for","addressLine2"],["type","text","pattern","^(\\w*\\s*[\\#\\-\\,\\/\\.\\(\\)\\&]*)+","formControlName","addressLine2",1,"form-control"],["for","state"],["type","text","formControlName","state",1,"form-control",3,"keyup"],[1,"list-group",3,"hidden"],["class","list-group-item",3,"click",4,"ngFor","ngForOf"],["for","city"],["type","text","formControlName","city","formControlName","city",1,"form-control",3,"keyup"],["for","pincode",1,"control-label"],["type","text","pattern","^[1-9][0-9]{5}$","formControlName","pincode",1,"form-control"],[1,"text-center"],[1,"btn","btn-primary",3,"disabled","click"],[1,"btn","btn-danger","ml-3",3,"click"],[1,"text-danger"],[2,"color","red"],[1,"list-group-item",3,"click"]],template:function(t,e){1&t&&(o.Qb(0,"div",0),o.Qb(1,"div",1),o.Qb(2,"form",2),o.Qb(3,"div",3),o.Qb(4,"h2",4),o.uc(5,"Institute Update Form"),o.Pb(),o.Mb(6,"br"),o.Pb(),o.Qb(7,"label",5),o.uc(8,"Institute Name "),o.Pb(),o.Mb(9,"input",6),o.sc(10,l,2,0,"div",7),o.sc(11,b,2,0,"div",8),o.Mb(12,"br"),o.Qb(13,"label",9),o.uc(14,"Institute Type "),o.Pb(),o.Mb(15,"input",10),o.sc(16,p,2,0,"div",7),o.sc(17,f,2,0,"div",8),o.Mb(18,"br"),o.Qb(19,"label",11),o.uc(20,"Address Line 1 "),o.Pb(),o.Mb(21,"input",12),o.sc(22,h,2,0,"div",7),o.sc(23,m,2,0,"div",8),o.Mb(24,"br"),o.Qb(25,"label",13),o.uc(26,"Address Line 2 "),o.Pb(),o.Mb(27,"input",14),o.sc(28,y,2,0,"div",7),o.sc(29,v,2,0,"div",8),o.Mb(30,"br"),o.Qb(31,"label",15),o.uc(32,"State"),o.Pb(),o.Qb(33,"input",16),o.Yb("keyup",(function(){return e.completeState()})),o.Pb(),o.Qb(34,"ul",17),o.sc(35,g,2,1,"li",18),o.Pb(),o.sc(36,L,2,0,"div",7),o.sc(37,I,2,0,"div",8),o.Mb(38,"br"),o.Qb(39,"label",19),o.uc(40,"City "),o.Pb(),o.Qb(41,"input",20),o.Yb("keyup",(function(){return e.completeCity()})),o.Pb(),o.Qb(42,"ul",17),o.sc(43,C,2,1,"li",18),o.Pb(),o.sc(44,P,2,0,"div",7),o.sc(45,w,2,0,"div",8),o.Mb(46,"br"),o.Qb(47,"label",21),o.uc(48,"Pin Code "),o.Pb(),o.Mb(49,"input",22),o.sc(50,F,2,0,"div",7),o.sc(51,Q,2,0,"div",8),o.Mb(52,"br"),o.Qb(53,"div",23),o.Qb(54,"button",24),o.Yb("click",(function(){return e.update()})),o.uc(55,"Update"),o.Pb(),o.Qb(56,"button",25),o.Yb("click",(function(){return e.cancel()})),o.uc(57,"Cancel"),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.Pb()),2&t&&(o.Bb(2),o.Db("has-error",e.instituteName.invalid&&e.instituteName.touched||e.instituteType.invalid&&e.instituteType.touched||e.addressLine1.invalid&&e.addressLine1.touched||e.addressLine2.invalid&&e.addressLine2.touched||e.state.invalid&&e.state.touched||e.city.invalid&&e.city.touched||e.pincode.invalid&&e.pincode.touched),o.fc("formGroup",e.instituteUpdateForm),o.Bb(8),o.fc("ngIf",e.instituteName.invalid&&(e.instituteName.dirty||e.instituteName.touched)),o.Bb(1),o.fc("ngIf",null==e.instituteName.errors?null:e.instituteName.errors.pattern),o.Bb(5),o.fc("ngIf",e.instituteType.invalid&&(e.instituteType.dirty||e.instituteType.touched)),o.Bb(1),o.fc("ngIf",null==e.instituteType.errors?null:e.instituteType.errors.pattern),o.Bb(5),o.fc("ngIf",e.addressLine1.invalid&&(e.addressLine1.dirty||e.addressLine1.touched)),o.Bb(1),o.fc("ngIf",null==e.addressLine1.errors?null:e.addressLine1.errors.pattern),o.Bb(5),o.fc("ngIf",e.addressLine2.invalid&&(e.addressLine2.dirty||e.addressLine2.touched)),o.Bb(1),o.fc("ngIf",null==e.addressLine2.errors?null:e.addressLine2.errors.pattern),o.Bb(5),o.fc("hidden",e.hideUl),o.Bb(1),o.fc("ngForOf",e.StateArray),o.Bb(1),o.fc("ngIf",e.state.invalid&&(e.state.dirty||e.state.touched)),o.Bb(1),o.fc("ngIf",null==e.state.errors?null:e.state.errors.pattern),o.Bb(5),o.fc("hidden",e.hideCity),o.Bb(1),o.fc("ngForOf",e.cityDemo),o.Bb(1),o.fc("ngIf",e.city.invalid&&(e.city.dirty||e.city.touched)),o.Bb(1),o.fc("ngIf",null==e.city.errors?null:e.city.errors.pattern),o.Bb(5),o.fc("ngIf",e.pincode.invalid&&(e.pincode.dirty||e.pincode.touched)),o.Bb(1),o.fc("ngIf",null==e.pincode.errors?null:e.pincode.errors.pattern),o.Bb(3),o.fc("disabled",e.instituteUpdateForm.invalid))},directives:[n.q,n.h,n.d,n.a,n.l,n.g,n.c,s.j,s.i],styles:[""]}),t})()}]}];let N=(()=>{class t{}return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},imports:[[r.c.forChild(U)],r.c]}),t})(),B=(()=>{class t{}return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},imports:[[s.b,N,n.e,n.m]]}),t})()}}]);