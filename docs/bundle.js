!function(t){var r={};function n(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=r,n.d=function(t,r,a){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var e in t)n.d(a,e,function(r){return t[r]}.bind(null,e));return a},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=8)}({10:function(t,r,n){"use strict";n.r(r);var a={};n.r(a),n.d(a,"create",(function(){return s})),n.d(a,"clone",(function(){return M})),n.d(a,"copy",(function(){return d})),n.d(a,"fromValues",(function(){return l})),n.d(a,"set",(function(){return v})),n.d(a,"identity",(function(){return b})),n.d(a,"transpose",(function(){return m})),n.d(a,"invert",(function(){return x})),n.d(a,"adjoint",(function(){return p})),n.d(a,"determinant",(function(){return A})),n.d(a,"multiply",(function(){return y})),n.d(a,"translate",(function(){return g})),n.d(a,"scale",(function(){return R})),n.d(a,"rotate",(function(){return E})),n.d(a,"rotateX",(function(){return S})),n.d(a,"rotateY",(function(){return w})),n.d(a,"rotateZ",(function(){return F})),n.d(a,"fromTranslation",(function(){return T})),n.d(a,"fromScaling",(function(){return P})),n.d(a,"fromRotation",(function(){return _})),n.d(a,"fromXRotation",(function(){return L})),n.d(a,"fromYRotation",(function(){return V})),n.d(a,"fromZRotation",(function(){return B})),n.d(a,"fromRotationTranslation",(function(){return C})),n.d(a,"fromQuat2",(function(){return I})),n.d(a,"getTranslation",(function(){return U})),n.d(a,"getScaling",(function(){return D})),n.d(a,"getRotation",(function(){return O})),n.d(a,"fromRotationTranslationScale",(function(){return q})),n.d(a,"fromRotationTranslationScaleOrigin",(function(){return j})),n.d(a,"fromQuat",(function(){return Y})),n.d(a,"frustum",(function(){return N})),n.d(a,"perspective",(function(){return H})),n.d(a,"perspectiveFromFieldOfView",(function(){return W})),n.d(a,"ortho",(function(){return G})),n.d(a,"lookAt",(function(){return Q})),n.d(a,"targetTo",(function(){return X})),n.d(a,"str",(function(){return k})),n.d(a,"frob",(function(){return Z})),n.d(a,"add",(function(){return z})),n.d(a,"subtract",(function(){return K})),n.d(a,"multiplyScalar",(function(){return J})),n.d(a,"multiplyScalarAndAdd",(function(){return $})),n.d(a,"exactEquals",(function(){return tt})),n.d(a,"equals",(function(){return rt})),n.d(a,"mul",(function(){return nt})),n.d(a,"sub",(function(){return at}));var e=[-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1],o=[[1,1,1,1],[1,0,0,1],[0,1,0,1],[0,0,1,1],[1,1,0,1],[1,0,1,1]],i=[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23];var u={vs:"#version 300 es\nin vec4 aVertexPosition;\nin vec4 aVertexColor;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nout lowp vec4 vColor;\n\nvoid main() {\n    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;\n    vColor = aVertexColor;\n}",fs:"#version 300 es\nin lowp vec4 vColor;\n\nout mediump vec4 outColor;\n\nvoid main() {\n  outColor = vColor;\n}"};function c(t,r,n,a){var e=t.createShader(r);if(t.shaderSource(e,n),t.compileShader(e),!t.getShaderParameter(e,t.COMPILE_STATUS))throw new Error("Failed to compile "+a+" shader: "+t.getShaderInfoLog(e));return e}var f=1e-6,h="undefined"!=typeof Float32Array?Float32Array:Array;Math.random;Math.PI;function s(){var t=new h(16);return h!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function M(t){var r=new h(16);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r}function d(t,r){return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],t}function l(t,r,n,a,e,o,i,u,c,f,s,M,d,l,v,b){var m=new h(16);return m[0]=t,m[1]=r,m[2]=n,m[3]=a,m[4]=e,m[5]=o,m[6]=i,m[7]=u,m[8]=c,m[9]=f,m[10]=s,m[11]=M,m[12]=d,m[13]=l,m[14]=v,m[15]=b,m}function v(t,r,n,a,e,o,i,u,c,f,h,s,M,d,l,v,b){return t[0]=r,t[1]=n,t[2]=a,t[3]=e,t[4]=o,t[5]=i,t[6]=u,t[7]=c,t[8]=f,t[9]=h,t[10]=s,t[11]=M,t[12]=d,t[13]=l,t[14]=v,t[15]=b,t}function b(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function m(t,r){if(t===r){var n=r[1],a=r[2],e=r[3],o=r[6],i=r[7],u=r[11];t[1]=r[4],t[2]=r[8],t[3]=r[12],t[4]=n,t[6]=r[9],t[7]=r[13],t[8]=a,t[9]=o,t[11]=r[14],t[12]=e,t[13]=i,t[14]=u}else t[0]=r[0],t[1]=r[4],t[2]=r[8],t[3]=r[12],t[4]=r[1],t[5]=r[5],t[6]=r[9],t[7]=r[13],t[8]=r[2],t[9]=r[6],t[10]=r[10],t[11]=r[14],t[12]=r[3],t[13]=r[7],t[14]=r[11],t[15]=r[15];return t}function x(t,r){var n=r[0],a=r[1],e=r[2],o=r[3],i=r[4],u=r[5],c=r[6],f=r[7],h=r[8],s=r[9],M=r[10],d=r[11],l=r[12],v=r[13],b=r[14],m=r[15],x=n*u-a*i,p=n*c-e*i,A=n*f-o*i,y=a*c-e*u,g=a*f-o*u,R=e*f-o*c,E=h*v-s*l,S=h*b-M*l,w=h*m-d*l,F=s*b-M*v,T=s*m-d*v,P=M*m-d*b,_=x*P-p*T+A*F+y*w-g*S+R*E;return _?(_=1/_,t[0]=(u*P-c*T+f*F)*_,t[1]=(e*T-a*P-o*F)*_,t[2]=(v*R-b*g+m*y)*_,t[3]=(M*g-s*R-d*y)*_,t[4]=(c*w-i*P-f*S)*_,t[5]=(n*P-e*w+o*S)*_,t[6]=(b*A-l*R-m*p)*_,t[7]=(h*R-M*A+d*p)*_,t[8]=(i*T-u*w+f*E)*_,t[9]=(a*w-n*T-o*E)*_,t[10]=(l*g-v*A+m*x)*_,t[11]=(s*A-h*g-d*x)*_,t[12]=(u*S-i*F-c*E)*_,t[13]=(n*F-a*S+e*E)*_,t[14]=(v*p-l*y-b*x)*_,t[15]=(h*y-s*p+M*x)*_,t):null}function p(t,r){var n=r[0],a=r[1],e=r[2],o=r[3],i=r[4],u=r[5],c=r[6],f=r[7],h=r[8],s=r[9],M=r[10],d=r[11],l=r[12],v=r[13],b=r[14],m=r[15];return t[0]=u*(M*m-d*b)-s*(c*m-f*b)+v*(c*d-f*M),t[1]=-(a*(M*m-d*b)-s*(e*m-o*b)+v*(e*d-o*M)),t[2]=a*(c*m-f*b)-u*(e*m-o*b)+v*(e*f-o*c),t[3]=-(a*(c*d-f*M)-u*(e*d-o*M)+s*(e*f-o*c)),t[4]=-(i*(M*m-d*b)-h*(c*m-f*b)+l*(c*d-f*M)),t[5]=n*(M*m-d*b)-h*(e*m-o*b)+l*(e*d-o*M),t[6]=-(n*(c*m-f*b)-i*(e*m-o*b)+l*(e*f-o*c)),t[7]=n*(c*d-f*M)-i*(e*d-o*M)+h*(e*f-o*c),t[8]=i*(s*m-d*v)-h*(u*m-f*v)+l*(u*d-f*s),t[9]=-(n*(s*m-d*v)-h*(a*m-o*v)+l*(a*d-o*s)),t[10]=n*(u*m-f*v)-i*(a*m-o*v)+l*(a*f-o*u),t[11]=-(n*(u*d-f*s)-i*(a*d-o*s)+h*(a*f-o*u)),t[12]=-(i*(s*b-M*v)-h*(u*b-c*v)+l*(u*M-c*s)),t[13]=n*(s*b-M*v)-h*(a*b-e*v)+l*(a*M-e*s),t[14]=-(n*(u*b-c*v)-i*(a*b-e*v)+l*(a*c-e*u)),t[15]=n*(u*M-c*s)-i*(a*M-e*s)+h*(a*c-e*u),t}function A(t){var r=t[0],n=t[1],a=t[2],e=t[3],o=t[4],i=t[5],u=t[6],c=t[7],f=t[8],h=t[9],s=t[10],M=t[11],d=t[12],l=t[13],v=t[14],b=t[15];return(r*i-n*o)*(s*b-M*v)-(r*u-a*o)*(h*b-M*l)+(r*c-e*o)*(h*v-s*l)+(n*u-a*i)*(f*b-M*d)-(n*c-e*i)*(f*v-s*d)+(a*c-e*u)*(f*l-h*d)}function y(t,r,n){var a=r[0],e=r[1],o=r[2],i=r[3],u=r[4],c=r[5],f=r[6],h=r[7],s=r[8],M=r[9],d=r[10],l=r[11],v=r[12],b=r[13],m=r[14],x=r[15],p=n[0],A=n[1],y=n[2],g=n[3];return t[0]=p*a+A*u+y*s+g*v,t[1]=p*e+A*c+y*M+g*b,t[2]=p*o+A*f+y*d+g*m,t[3]=p*i+A*h+y*l+g*x,p=n[4],A=n[5],y=n[6],g=n[7],t[4]=p*a+A*u+y*s+g*v,t[5]=p*e+A*c+y*M+g*b,t[6]=p*o+A*f+y*d+g*m,t[7]=p*i+A*h+y*l+g*x,p=n[8],A=n[9],y=n[10],g=n[11],t[8]=p*a+A*u+y*s+g*v,t[9]=p*e+A*c+y*M+g*b,t[10]=p*o+A*f+y*d+g*m,t[11]=p*i+A*h+y*l+g*x,p=n[12],A=n[13],y=n[14],g=n[15],t[12]=p*a+A*u+y*s+g*v,t[13]=p*e+A*c+y*M+g*b,t[14]=p*o+A*f+y*d+g*m,t[15]=p*i+A*h+y*l+g*x,t}function g(t,r,n){var a,e,o,i,u,c,f,h,s,M,d,l,v=n[0],b=n[1],m=n[2];return r===t?(t[12]=r[0]*v+r[4]*b+r[8]*m+r[12],t[13]=r[1]*v+r[5]*b+r[9]*m+r[13],t[14]=r[2]*v+r[6]*b+r[10]*m+r[14],t[15]=r[3]*v+r[7]*b+r[11]*m+r[15]):(a=r[0],e=r[1],o=r[2],i=r[3],u=r[4],c=r[5],f=r[6],h=r[7],s=r[8],M=r[9],d=r[10],l=r[11],t[0]=a,t[1]=e,t[2]=o,t[3]=i,t[4]=u,t[5]=c,t[6]=f,t[7]=h,t[8]=s,t[9]=M,t[10]=d,t[11]=l,t[12]=a*v+u*b+s*m+r[12],t[13]=e*v+c*b+M*m+r[13],t[14]=o*v+f*b+d*m+r[14],t[15]=i*v+h*b+l*m+r[15]),t}function R(t,r,n){var a=n[0],e=n[1],o=n[2];return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=r[3]*a,t[4]=r[4]*e,t[5]=r[5]*e,t[6]=r[6]*e,t[7]=r[7]*e,t[8]=r[8]*o,t[9]=r[9]*o,t[10]=r[10]*o,t[11]=r[11]*o,t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],t}function E(t,r,n,a){var e,o,i,u,c,h,s,M,d,l,v,b,m,x,p,A,y,g,R,E,S,w,F,T,P=a[0],_=a[1],L=a[2],V=Math.hypot(P,_,L);return V<f?null:(P*=V=1/V,_*=V,L*=V,e=Math.sin(n),i=1-(o=Math.cos(n)),u=r[0],c=r[1],h=r[2],s=r[3],M=r[4],d=r[5],l=r[6],v=r[7],b=r[8],m=r[9],x=r[10],p=r[11],A=P*P*i+o,y=_*P*i+L*e,g=L*P*i-_*e,R=P*_*i-L*e,E=_*_*i+o,S=L*_*i+P*e,w=P*L*i+_*e,F=_*L*i-P*e,T=L*L*i+o,t[0]=u*A+M*y+b*g,t[1]=c*A+d*y+m*g,t[2]=h*A+l*y+x*g,t[3]=s*A+v*y+p*g,t[4]=u*R+M*E+b*S,t[5]=c*R+d*E+m*S,t[6]=h*R+l*E+x*S,t[7]=s*R+v*E+p*S,t[8]=u*w+M*F+b*T,t[9]=c*w+d*F+m*T,t[10]=h*w+l*F+x*T,t[11]=s*w+v*F+p*T,r!==t&&(t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),t)}function S(t,r,n){var a=Math.sin(n),e=Math.cos(n),o=r[4],i=r[5],u=r[6],c=r[7],f=r[8],h=r[9],s=r[10],M=r[11];return r!==t&&(t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),t[4]=o*e+f*a,t[5]=i*e+h*a,t[6]=u*e+s*a,t[7]=c*e+M*a,t[8]=f*e-o*a,t[9]=h*e-i*a,t[10]=s*e-u*a,t[11]=M*e-c*a,t}function w(t,r,n){var a=Math.sin(n),e=Math.cos(n),o=r[0],i=r[1],u=r[2],c=r[3],f=r[8],h=r[9],s=r[10],M=r[11];return r!==t&&(t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),t[0]=o*e-f*a,t[1]=i*e-h*a,t[2]=u*e-s*a,t[3]=c*e-M*a,t[8]=o*a+f*e,t[9]=i*a+h*e,t[10]=u*a+s*e,t[11]=c*a+M*e,t}function F(t,r,n){var a=Math.sin(n),e=Math.cos(n),o=r[0],i=r[1],u=r[2],c=r[3],f=r[4],h=r[5],s=r[6],M=r[7];return r!==t&&(t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),t[0]=o*e+f*a,t[1]=i*e+h*a,t[2]=u*e+s*a,t[3]=c*e+M*a,t[4]=f*e-o*a,t[5]=h*e-i*a,t[6]=s*e-u*a,t[7]=M*e-c*a,t}function T(t,r){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function P(t,r){return t[0]=r[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=r[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function _(t,r,n){var a,e,o,i=n[0],u=n[1],c=n[2],h=Math.hypot(i,u,c);return h<f?null:(i*=h=1/h,u*=h,c*=h,a=Math.sin(r),o=1-(e=Math.cos(r)),t[0]=i*i*o+e,t[1]=u*i*o+c*a,t[2]=c*i*o-u*a,t[3]=0,t[4]=i*u*o-c*a,t[5]=u*u*o+e,t[6]=c*u*o+i*a,t[7]=0,t[8]=i*c*o+u*a,t[9]=u*c*o-i*a,t[10]=c*c*o+e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function L(t,r){var n=Math.sin(r),a=Math.cos(r);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=n,t[7]=0,t[8]=0,t[9]=-n,t[10]=a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function V(t,r){var n=Math.sin(r),a=Math.cos(r);return t[0]=a,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function B(t,r){var n=Math.sin(r),a=Math.cos(r);return t[0]=a,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function C(t,r,n){var a=r[0],e=r[1],o=r[2],i=r[3],u=a+a,c=e+e,f=o+o,h=a*u,s=a*c,M=a*f,d=e*c,l=e*f,v=o*f,b=i*u,m=i*c,x=i*f;return t[0]=1-(d+v),t[1]=s+x,t[2]=M-m,t[3]=0,t[4]=s-x,t[5]=1-(h+v),t[6]=l+b,t[7]=0,t[8]=M+m,t[9]=l-b,t[10]=1-(h+d),t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function I(t,r){var n=new h(3),a=-r[0],e=-r[1],o=-r[2],i=r[3],u=r[4],c=r[5],f=r[6],s=r[7],M=a*a+e*e+o*o+i*i;return M>0?(n[0]=2*(u*i+s*a+c*o-f*e)/M,n[1]=2*(c*i+s*e+f*a-u*o)/M,n[2]=2*(f*i+s*o+u*e-c*a)/M):(n[0]=2*(u*i+s*a+c*o-f*e),n[1]=2*(c*i+s*e+f*a-u*o),n[2]=2*(f*i+s*o+u*e-c*a)),C(t,r,n),t}function U(t,r){return t[0]=r[12],t[1]=r[13],t[2]=r[14],t}function D(t,r){var n=r[0],a=r[1],e=r[2],o=r[4],i=r[5],u=r[6],c=r[8],f=r[9],h=r[10];return t[0]=Math.hypot(n,a,e),t[1]=Math.hypot(o,i,u),t[2]=Math.hypot(c,f,h),t}function O(t,r){var n=new h(3);D(n,r);var a=1/n[0],e=1/n[1],o=1/n[2],i=r[0]*a,u=r[1]*e,c=r[2]*o,f=r[4]*a,s=r[5]*e,M=r[6]*o,d=r[8]*a,l=r[9]*e,v=r[10]*o,b=i+s+v,m=0;return b>0?(m=2*Math.sqrt(b+1),t[3]=.25*m,t[0]=(M-l)/m,t[1]=(d-c)/m,t[2]=(u-f)/m):i>s&&i>v?(m=2*Math.sqrt(1+i-s-v),t[3]=(M-l)/m,t[0]=.25*m,t[1]=(u+f)/m,t[2]=(d+c)/m):s>v?(m=2*Math.sqrt(1+s-i-v),t[3]=(d-c)/m,t[0]=(u+f)/m,t[1]=.25*m,t[2]=(M+l)/m):(m=2*Math.sqrt(1+v-i-s),t[3]=(u-f)/m,t[0]=(d+c)/m,t[1]=(M+l)/m,t[2]=.25*m),t}function q(t,r,n,a){var e=r[0],o=r[1],i=r[2],u=r[3],c=e+e,f=o+o,h=i+i,s=e*c,M=e*f,d=e*h,l=o*f,v=o*h,b=i*h,m=u*c,x=u*f,p=u*h,A=a[0],y=a[1],g=a[2];return t[0]=(1-(l+b))*A,t[1]=(M+p)*A,t[2]=(d-x)*A,t[3]=0,t[4]=(M-p)*y,t[5]=(1-(s+b))*y,t[6]=(v+m)*y,t[7]=0,t[8]=(d+x)*g,t[9]=(v-m)*g,t[10]=(1-(s+l))*g,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function j(t,r,n,a,e){var o=r[0],i=r[1],u=r[2],c=r[3],f=o+o,h=i+i,s=u+u,M=o*f,d=o*h,l=o*s,v=i*h,b=i*s,m=u*s,x=c*f,p=c*h,A=c*s,y=a[0],g=a[1],R=a[2],E=e[0],S=e[1],w=e[2],F=(1-(v+m))*y,T=(d+A)*y,P=(l-p)*y,_=(d-A)*g,L=(1-(M+m))*g,V=(b+x)*g,B=(l+p)*R,C=(b-x)*R,I=(1-(M+v))*R;return t[0]=F,t[1]=T,t[2]=P,t[3]=0,t[4]=_,t[5]=L,t[6]=V,t[7]=0,t[8]=B,t[9]=C,t[10]=I,t[11]=0,t[12]=n[0]+E-(F*E+_*S+B*w),t[13]=n[1]+S-(T*E+L*S+C*w),t[14]=n[2]+w-(P*E+V*S+I*w),t[15]=1,t}function Y(t,r){var n=r[0],a=r[1],e=r[2],o=r[3],i=n+n,u=a+a,c=e+e,f=n*i,h=a*i,s=a*u,M=e*i,d=e*u,l=e*c,v=o*i,b=o*u,m=o*c;return t[0]=1-s-l,t[1]=h+m,t[2]=M-b,t[3]=0,t[4]=h-m,t[5]=1-f-l,t[6]=d+v,t[7]=0,t[8]=M+b,t[9]=d-v,t[10]=1-f-s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function N(t,r,n,a,e,o,i){var u=1/(n-r),c=1/(e-a),f=1/(o-i);return t[0]=2*o*u,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*o*c,t[6]=0,t[7]=0,t[8]=(n+r)*u,t[9]=(e+a)*c,t[10]=(i+o)*f,t[11]=-1,t[12]=0,t[13]=0,t[14]=i*o*2*f,t[15]=0,t}function H(t,r,n,a,e){var o,i=1/Math.tan(r/2);return t[0]=i/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=e&&e!==1/0?(o=1/(a-e),t[10]=(e+a)*o,t[14]=2*e*a*o):(t[10]=-1,t[14]=-2*a),t}function W(t,r,n,a){var e=Math.tan(r.upDegrees*Math.PI/180),o=Math.tan(r.downDegrees*Math.PI/180),i=Math.tan(r.leftDegrees*Math.PI/180),u=Math.tan(r.rightDegrees*Math.PI/180),c=2/(i+u),f=2/(e+o);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=f,t[6]=0,t[7]=0,t[8]=-(i-u)*c*.5,t[9]=(e-o)*f*.5,t[10]=a/(n-a),t[11]=-1,t[12]=0,t[13]=0,t[14]=a*n/(n-a),t[15]=0,t}function G(t,r,n,a,e,o,i){var u=1/(r-n),c=1/(a-e),f=1/(o-i);return t[0]=-2*u,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*f,t[11]=0,t[12]=(r+n)*u,t[13]=(e+a)*c,t[14]=(i+o)*f,t[15]=1,t}function Q(t,r,n,a){var e,o,i,u,c,h,s,M,d,l,v=r[0],m=r[1],x=r[2],p=a[0],A=a[1],y=a[2],g=n[0],R=n[1],E=n[2];return Math.abs(v-g)<f&&Math.abs(m-R)<f&&Math.abs(x-E)<f?b(t):(s=v-g,M=m-R,d=x-E,e=A*(d*=l=1/Math.hypot(s,M,d))-y*(M*=l),o=y*(s*=l)-p*d,i=p*M-A*s,(l=Math.hypot(e,o,i))?(e*=l=1/l,o*=l,i*=l):(e=0,o=0,i=0),u=M*i-d*o,c=d*e-s*i,h=s*o-M*e,(l=Math.hypot(u,c,h))?(u*=l=1/l,c*=l,h*=l):(u=0,c=0,h=0),t[0]=e,t[1]=u,t[2]=s,t[3]=0,t[4]=o,t[5]=c,t[6]=M,t[7]=0,t[8]=i,t[9]=h,t[10]=d,t[11]=0,t[12]=-(e*v+o*m+i*x),t[13]=-(u*v+c*m+h*x),t[14]=-(s*v+M*m+d*x),t[15]=1,t)}function X(t,r,n,a){var e=r[0],o=r[1],i=r[2],u=a[0],c=a[1],f=a[2],h=e-n[0],s=o-n[1],M=i-n[2],d=h*h+s*s+M*M;d>0&&(h*=d=1/Math.sqrt(d),s*=d,M*=d);var l=c*M-f*s,v=f*h-u*M,b=u*s-c*h;return(d=l*l+v*v+b*b)>0&&(l*=d=1/Math.sqrt(d),v*=d,b*=d),t[0]=l,t[1]=v,t[2]=b,t[3]=0,t[4]=s*b-M*v,t[5]=M*l-h*b,t[6]=h*v-s*l,t[7]=0,t[8]=h,t[9]=s,t[10]=M,t[11]=0,t[12]=e,t[13]=o,t[14]=i,t[15]=1,t}function k(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}function Z(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])}function z(t,r,n){return t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=r[2]+n[2],t[3]=r[3]+n[3],t[4]=r[4]+n[4],t[5]=r[5]+n[5],t[6]=r[6]+n[6],t[7]=r[7]+n[7],t[8]=r[8]+n[8],t[9]=r[9]+n[9],t[10]=r[10]+n[10],t[11]=r[11]+n[11],t[12]=r[12]+n[12],t[13]=r[13]+n[13],t[14]=r[14]+n[14],t[15]=r[15]+n[15],t}function K(t,r,n){return t[0]=r[0]-n[0],t[1]=r[1]-n[1],t[2]=r[2]-n[2],t[3]=r[3]-n[3],t[4]=r[4]-n[4],t[5]=r[5]-n[5],t[6]=r[6]-n[6],t[7]=r[7]-n[7],t[8]=r[8]-n[8],t[9]=r[9]-n[9],t[10]=r[10]-n[10],t[11]=r[11]-n[11],t[12]=r[12]-n[12],t[13]=r[13]-n[13],t[14]=r[14]-n[14],t[15]=r[15]-n[15],t}function J(t,r,n){return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=r[3]*n,t[4]=r[4]*n,t[5]=r[5]*n,t[6]=r[6]*n,t[7]=r[7]*n,t[8]=r[8]*n,t[9]=r[9]*n,t[10]=r[10]*n,t[11]=r[11]*n,t[12]=r[12]*n,t[13]=r[13]*n,t[14]=r[14]*n,t[15]=r[15]*n,t}function $(t,r,n,a){return t[0]=r[0]+n[0]*a,t[1]=r[1]+n[1]*a,t[2]=r[2]+n[2]*a,t[3]=r[3]+n[3]*a,t[4]=r[4]+n[4]*a,t[5]=r[5]+n[5]*a,t[6]=r[6]+n[6]*a,t[7]=r[7]+n[7]*a,t[8]=r[8]+n[8]*a,t[9]=r[9]+n[9]*a,t[10]=r[10]+n[10]*a,t[11]=r[11]+n[11]*a,t[12]=r[12]+n[12]*a,t[13]=r[13]+n[13]*a,t[14]=r[14]+n[14]*a,t[15]=r[15]+n[15]*a,t}function tt(t,r){return t[0]===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}function rt(t,r){var n=t[0],a=t[1],e=t[2],o=t[3],i=t[4],u=t[5],c=t[6],h=t[7],s=t[8],M=t[9],d=t[10],l=t[11],v=t[12],b=t[13],m=t[14],x=t[15],p=r[0],A=r[1],y=r[2],g=r[3],R=r[4],E=r[5],S=r[6],w=r[7],F=r[8],T=r[9],P=r[10],_=r[11],L=r[12],V=r[13],B=r[14],C=r[15];return Math.abs(n-p)<=f*Math.max(1,Math.abs(n),Math.abs(p))&&Math.abs(a-A)<=f*Math.max(1,Math.abs(a),Math.abs(A))&&Math.abs(e-y)<=f*Math.max(1,Math.abs(e),Math.abs(y))&&Math.abs(o-g)<=f*Math.max(1,Math.abs(o),Math.abs(g))&&Math.abs(i-R)<=f*Math.max(1,Math.abs(i),Math.abs(R))&&Math.abs(u-E)<=f*Math.max(1,Math.abs(u),Math.abs(E))&&Math.abs(c-S)<=f*Math.max(1,Math.abs(c),Math.abs(S))&&Math.abs(h-w)<=f*Math.max(1,Math.abs(h),Math.abs(w))&&Math.abs(s-F)<=f*Math.max(1,Math.abs(s),Math.abs(F))&&Math.abs(M-T)<=f*Math.max(1,Math.abs(M),Math.abs(T))&&Math.abs(d-P)<=f*Math.max(1,Math.abs(d),Math.abs(P))&&Math.abs(l-_)<=f*Math.max(1,Math.abs(l),Math.abs(_))&&Math.abs(v-L)<=f*Math.max(1,Math.abs(v),Math.abs(L))&&Math.abs(b-V)<=f*Math.max(1,Math.abs(b),Math.abs(V))&&Math.abs(m-B)<=f*Math.max(1,Math.abs(m),Math.abs(B))&&Math.abs(x-C)<=f*Math.max(1,Math.abs(x),Math.abs(C))}Math.hypot||(Math.hypot=function(){for(var t=0,r=arguments.length;r--;)t+=arguments[r]*arguments[r];return Math.sqrt(t)});var nt=y,at=K,et=0;window.onload=function(){var t=document.querySelector("#canvas").getContext("webgl2");if(null===t)throw new Error("Unable to initialize WebGL. Your browser or machine may not support it.");var r=function(t,r,n){var a=c(t,t.VERTEX_SHADER,r,"vertex"),e=c(t,t.FRAGMENT_SHADER,n,"fragment"),o=t.createProgram();if(t.attachShader(o,a),t.attachShader(o,e),t.bindAttribLocation(o,0,"aVertexPosition"),t.bindAttribLocation(o,1,"aVertexColor"),t.linkProgram(o),!t.getProgramParameter(o,t.LINK_STATUS))throw new Error("Failed to init shader: "+t.getShaderInfoLog(o));return{program:o,attribLocations:{vertexPosition:0,vertexColor:1},uniformLocations:{projectionMatrix:t.getUniformLocation(o,"uProjectionMatrix"),modelViewMatrix:t.getUniformLocation(o,"uModelViewMatrix")}}}(t,u.vs,u.fs),n=function(t,r){var n=t.createVertexArray();t.bindVertexArray(n);var a=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,a),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW);var u=3,c=t.FLOAT,f=!1,h=0,s=0;t.vertexAttribPointer(r.attribLocations.vertexPosition,u,c,f,h,s),t.enableVertexAttribArray(r.attribLocations.vertexPosition);for(var M=[],d=0,l=o;d<l.length;d++)for(var v=l[d],b=0;b<4;b++)M=M.concat(v);var m=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,m),t.bufferData(t.ARRAY_BUFFER,new Float32Array(M),t.STATIC_DRAW),u=4,c=t.FLOAT,f=!1,h=0,s=0,t.vertexAttribPointer(r.attribLocations.vertexColor,u,c,f,h,s),t.enableVertexAttribArray(r.attribLocations.vertexColor);var x=t.createBuffer();return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,x),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array(i),t.STATIC_DRAW),t.bindVertexArray(null),{position:a,color:m,indices:x,cubeVertexArray:n}}(t,r);!1?document.querySelector("#loading-container").classList.remove("hidden"):document.querySelector("#loading-container").classList.add("hidden"),function(t,r,n){var e=.001*performance.now()-.01;requestAnimationFrame((function o(i){var u=(i*=.001)-e;e=i,function(t,r,n,e){!function(t){var r=t.clientWidth,n=t.clientHeight;t.width===r&&t.height===n||(t.width=r,t.height=n)}(t.canvas),t.viewport(0,0,t.canvas.width,t.canvas.height),t.clearDepth(1),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT);var o=t.canvas,i=45*Math.PI/180,u=o.clientWidth/o.clientHeight,c=a.create();a.perspective(c,i,u,.1,100);var f=a.create();a.translate(f,f,[-0,0,-6]),a.rotate(f,f,et,[0,1,0]),a.rotate(f,f,.7*et,[1,.33,0]),t.bindVertexArray(n.cubeVertexArray),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.indices),t.useProgram(r.program),t.uniformMatrix4fv(r.uniformLocations.projectionMatrix,!1,c),t.uniformMatrix4fv(r.uniformLocations.modelViewMatrix,!1,f);var h=t.UNSIGNED_SHORT;t.drawElements(t.TRIANGLES,36,h,0),et+=e}(t,r,n,u),requestAnimationFrame(o)}))}(t,r,n)}},8:function(t,r,n){n(10),t.exports=n(9)},9:function(t,r,n){}});