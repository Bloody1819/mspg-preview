(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1e3,e=>{"use strict";var t=e.i(8359),r=e.i(27919),i=t;class s extends i.Scene{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new i.BoxGeometry;e.deleteAttribute("uv");const t=new i.MeshStandardMaterial({side:i.BackSide}),r=new i.MeshStandardMaterial,s=new i.PointLight(0xffffff,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const o=new i.Mesh(e,t);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);const n=new i.InstancedMesh(e,r,6),l=new i.Object3D;l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),l.updateMatrix(),n.setMatrixAt(0,l.matrix),l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),l.updateMatrix(),n.setMatrixAt(1,l.matrix),l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),l.updateMatrix(),n.setMatrixAt(2,l.matrix),l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),l.updateMatrix(),n.setMatrixAt(3,l.matrix),l.position.set(2.291,-.756,-2.621),l.rotation.set(0,-.286,0),l.scale.set(1.546,1.552,1.496),l.updateMatrix(),n.setMatrixAt(4,l.matrix),l.position.set(-2.193,-.369,-5.547),l.rotation.set(0,.516,0),l.scale.set(3.875,3.487,2.986),l.updateMatrix(),n.setMatrixAt(5,l.matrix),this.add(n);const h=new i.Mesh(e,a(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const d=new i.Mesh(e,a(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const u=new i.Mesh(e,a(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const f=new i.Mesh(e,a(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const c=new i.Mesh(e,a(20));c.position.set(3.235,11.486,-12.541),c.scale.set(2.5,2,.1),this.add(c);const p=new i.Mesh(e,a(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;for(let t of(this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))}),e))t.dispose()}}function a(e){return new i.MeshLambertMaterial({color:0,emissive:0xffffff,emissiveIntensity:e})}let o={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var n=t;class l{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}let h=new n.OrthographicCamera(-1,1,1,-1,0,1);class d extends n.BufferGeometry{constructor(){super(),this.setAttribute("position",new n.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new n.Float32BufferAttribute([0,2,0,0,2,0],2))}}let u=new d;class f{constructor(e){this._mesh=new n.Mesh(u,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,h)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class c extends l{constructor(e,r="tDiffuse"){super(),this.textureID=r,this.uniforms=null,this.material=null,e instanceof t.ShaderMaterial?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=t.UniformsUtils.clone(e.uniforms),this.material=new t.ShaderMaterial({name:void 0!==e.name?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new f(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)),this._fsQuad.render(e)}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class p extends l{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){let i,s,a=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0),this.inverse?(i=0,s=1):(i=1,s=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),o.buffers.stencil.setFunc(a.ALWAYS,i,0xffffffff),o.buffers.stencil.setClear(s),o.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(a.EQUAL,1,0xffffffff),o.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),o.buffers.stencil.setLocked(!0)}}class m extends l{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class g{constructor(e,r){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),void 0===r){const i=e.getSize(new t.Vector2);this._width=i.width,this._height=i.height,(r=new t.WebGLRenderTarget(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:t.HalfFloatType})).texture.name="EffectComposer.rt1"}else this._width=r.width,this._height=r.height;this.renderTarget1=r,this.renderTarget2=r.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new c(o),this.copyPass.material.blending=t.NoBlending,this.timer=new t.Timer}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);-1!==t&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),void 0===e&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),r=!1;for(let t=0,i=this.passes.length;t<i;t++){let i=this.passes[t];if(!1!==i.enabled){if(i.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),i.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),i.needsSwap){if(r){let t=this.renderer.getContext(),r=this.renderer.state.buffers.stencil;r.setFunc(t.NOTEQUAL,1,0xffffffff),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),r.setFunc(t.EQUAL,1,0xffffffff)}this.swapBuffers()}void 0!==p&&(i instanceof p?r=!0:i instanceof m&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(void 0===e){let r=this.renderer.getSize(new t.Vector2);this._pixelRatio=this.renderer.getPixelRatio(),this._width=r.width,this._height=r.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let r=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(r,i),this.renderTarget2.setSize(r,i);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(r,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class v extends l{constructor(e,r,i=null,s=null,a=null){super(),this.scene=e,this.camera=r,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new t.Color}render(e,t,r){let i,s,a=e.autoClear;e.autoClear=!1,null!==this.overrideMaterial&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),null!==this.clearColor&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),null!==this.clearAlpha&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),!0==this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),!0===this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),null!==this.clearColor&&e.setClearColor(this._oldClearColor),null!==this.clearAlpha&&e.setClearAlpha(i),null!==this.overrideMaterial&&(this.scene.overrideMaterial=s),e.autoClear=a}}let M={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new t.Color(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class w extends l{constructor(e,r=1,i,s){super(),this.strength=r,this.radius=i,this.threshold=s,this.resolution=void 0!==e?new t.Vector2(e.x,e.y):new t.Vector2(256,256),this.clearColor=new t.Color(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);this.renderTargetBright=new t.WebGLRenderTarget(a,n,{type:t.HalfFloatType,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){const r=new t.WebGLRenderTarget(a,n,{type:t.HalfFloatType,depthBuffer:!1});r.texture.name="UnrealBloomPass.h"+e,r.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(r);const i=new t.WebGLRenderTarget(a,n,{type:t.HalfFloatType,depthBuffer:!1});i.texture.name="UnrealBloomPass.v"+e,i.texture.generateMipmaps=!1,this.renderTargetsVertical.push(i),a=Math.round(a/2),n=Math.round(n/2)}this.highPassUniforms=t.UniformsUtils.clone(M.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new t.ShaderMaterial({uniforms:this.highPassUniforms,vertexShader:M.vertexShader,fragmentShader:M.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];a=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new t.Vector2(1/a,1/n),a=Math.round(a/2),n=Math.round(n/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=r,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.uniforms.bloomFactors.value=[1,.8,.6,.4,.2],this.bloomTintColors=[new t.Vector3(1,1,1),new t.Vector3(1,1,1),new t.Vector3(1,1,1),new t.Vector3(1,1,1),new t.Vector3(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=t.UniformsUtils.clone(o.uniforms),this.blendMaterial=new t.ShaderMaterial({uniforms:this.copyUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,premultipliedAlpha:!0,blending:t.AdditiveBlending,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new t.Color,this._oldClearAlpha=1,this._basic=new t.MeshBasicMaterial,this._fsQuad=new f(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,r){let i=Math.round(e/2),s=Math.round(r/2);this.renderTargetBright.setSize(i,s);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(i,s),this.renderTargetsVertical[e].setSize(i,s),this.separableBlurMaterials[e].uniforms.invSize.value=new t.Vector2(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,r,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let t=0;t<this.nMips;t++)this._fsQuad.material=this.separableBlurMaterials[t],this.separableBlurMaterials[t].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[t].uniforms.direction.value=w.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[t]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[t].uniforms.colorTexture.value=this.renderTargetsHorizontal[t].texture,this.separableBlurMaterials[t].uniforms.direction.value=w.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[t]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[t];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?e.setRenderTarget(null):e.setRenderTarget(r),this._fsQuad.render(e),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let r=[],i=e/3;for(let t=0;t<e;t++)r.push(.39894*Math.exp(-.5*t*t/(i*i))/i);let s=[],a=[];for(let t=1;t<e;t+=2){let i=r[t],o=t+1<e?r[t+1]:0,n=i+o;s.push((t*i+(t+1)*o)/n),a.push(n)}return new t.ShaderMaterial({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new t.Vector2(.5,.5)},direction:{value:new t.Vector2(.5,.5)},centerWeight:{value:r[0]},gaussianOffsets:{value:s},gaussianWeights:{value:a}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new t.ShaderMaterial({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}w.BlurDirectionX=new t.Vector2(1,0),w.BlurDirectionY=new t.Vector2(0,1);let x={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class b extends l{constructor(){super(),this.isOutputPass=!0,this.uniforms=t.UniformsUtils.clone(x.uniforms),this.material=new t.RawShaderMaterial({name:x.name,uniforms:this.uniforms,vertexShader:x.vertexShader,fragmentShader:x.fragmentShader}),this._fsQuad=new f(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,r,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},t.ColorManagement.getTransfer(this._outputColorSpace)===t.SRGBTransfer&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===t.LinearToneMapping?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===t.ReinhardToneMapping?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===t.CineonToneMapping?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===t.ACESFilmicToneMapping?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===t.AgXToneMapping?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===t.NeutralToneMapping?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===t.CustomToneMapping&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),!0===this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(r),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)),this._fsQuad.render(e)}dispose(){this.material.dispose(),this._fsQuad.dispose()}}e.s(["createTransitScene",0,function(e,i,a){let o=new r.WebGLRenderer({antialias:!0,powerPreference:"low-power"});o.setClearColor(0xd8dee3,1),o.outputColorSpace=t.SRGBColorSpace,o.toneMapping=t.ACESFilmicToneMapping,o.toneMappingExposure=.85,o.shadowMap.enabled=!0,o.shadowMap.type=t.PCFShadowMap,e.appendChild(o.domElement),o.domElement.setAttribute("aria-hidden","true");let n=new t.Scene,l=new t.Color("#d8dee3");n.background=l,n.fog=new t.Fog(l,38,90);let h=new t.PerspectiveCamera(33,1,.1,120),d=new r.PMREMGenerator(o),u=new s,f=d.fromScene(u,.04);n.environment=f.texture,n.environmentIntensity=.75,u.dispose(),d.dispose();let c=new g(o,new t.WebGLRenderTarget(1,1,{type:t.HalfFloatType,samples:4})),p=new w(new t.Vector2(1,1),.3,.5,2.2);c.addPass(new v(n,h)),c.addPass(p),c.addPass(new b);let m=new Set,M=new Set,x=[],T=e=>(m.add(e),e),S=e=>(M.add(e),e);function _(e,r){let i=document.createElement("canvas");i.width=i.height=512;let s=i.getContext("2d");s&&e(s,512);let a=new t.CanvasTexture(i);return a.colorSpace=t.SRGBColorSpace,a.wrapS=a.wrapT=t.RepeatWrapping,a.repeat.set(...r),a.anisotropy=8,x.push(a),a}let C=_((e,t)=>{for(let r=0;r<16;r++){let i=r%4*t/4,s=Math.floor(r/4)*t/4,a=74+37*r%7;e.fillStyle=`hsl(36 6% ${a}%)`,e.fillRect(i,s,t/4,t/4)}for(let r=0;r<2600;r++)e.fillStyle=`rgba(${r%2?"255,255,255":"90,86,78"},.06)`,e.fillRect(97*r%t,53*r%t,2,2);e.fillStyle="#b3aea4";for(let r=0;r<4;r++)e.fillRect(r*t/4-1.5,0,3,t),e.fillRect(0,r*t/4-1.5,t,3)},[20,20]),P=_((e,t)=>{e.fillStyle="#eceae5",e.fillRect(0,0,t,t);let r=e.createLinearGradient(0,40,0,470);r.addColorStop(0,"#aac6dd"),r.addColorStop(1,"#eef5fa");for(let i=0;i<t;i+=t/2)e.fillStyle=r,e.fillRect(i+10,40,t/2-20,430),e.fillStyle="#9aa1a8",e.fillRect(i+t/4-2,40,4,430),e.fillRect(i+8,38,t/2-16,6),e.fillRect(i+8,466,t/2-16,6)},[6,1]),y=(e,r,i=.92)=>S(new t.MeshStandardMaterial({color:e,metalness:i,roughness:r})),R=y("#b4bbc2",.28),E=y("#9da5ad",.4),A=y("#3d444b",.4,.75),B=y("#868d95",.45,.75),U=S(new t.MeshStandardMaterial({color:"#14171b",metalness:.1,roughness:.5})),F=S(new t.MeshStandardMaterial({color:"#f0b920",metalness:.3,roughness:.42})),D=S(new t.MeshStandardMaterial({color:"#fff3d6",emissive:"#ffd9a0",emissiveIntensity:3.2,roughness:.5})),L=S(new t.MeshStandardMaterial({color:"#cfe3ec",transparent:!0,opacity:.2,roughness:.04,metalness:.1,depthWrite:!1,side:t.DoubleSide})),I=S(new t.MeshStandardMaterial({map:C,roughness:.26,metalness:.05})),z=S(new t.MeshStandardMaterial({map:P,roughness:.7})),N=S(new t.MeshStandardMaterial({color:"#ecebe6",roughness:.7})),G=new t.Group;function O(e,r,i){let s=new t.Mesh(T(new t.BoxGeometry(...e)),i);return s.position.set(...r),s.castShadow=i!==L,G.add(s),s}function V(e,t,r,i,s){let a=O([Math.hypot(t[0]-e[0],t[1]-e[1]),i,i],[(e[0]+t[0])/2,(e[1]+t[1])/2,r],s);return a.rotation.z=Math.atan2(t[1]-e[1],t[0]-e[0]),a}function Q(e,r=!1){return new t.CatmullRomCurve3(e.map(([e,r])=>new t.Vector3(e,r,0)),r,"centripetal")}function H(e,r,i,s=0,a=96,o=!1){let n=new t.Mesh(T(new t.TubeGeometry(e,a,r,8,o)),i);return n.position.z=s,n.castShadow=!0,G.add(n),n}function W(e,r,i,s){let a=new t.Shape;a.moveTo(...e[0]);for(let t=1;t<e.length;t++)a.lineTo(...e[t]);a.closePath();let o=new t.Mesh(T(new t.ExtrudeGeometry(a,{depth:r,bevelEnabled:!1})),s);return o.position.z=i,o.castShadow=s!==L,G.add(o),o}function k(e,r,i,s){let a=new t.Mesh(T(new t.CylinderGeometry(i,i,1.1,36)),A);for(let o of(a.rotation.x=Math.PI/2,a.position.set(e,r,s),a.castShadow=!0,G.add(a),[-.57,.57])){let a=new t.Mesh(T(new t.TorusGeometry(i,.03,8,48)),F);a.position.set(e,r,s+o),G.add(a)}let o=new t.InstancedMesh(T(new t.BoxGeometry(.08,.09,1.12)),R,20),n=new t.Object3D;for(let t=0;t<20;t++){let a=t/20*Math.PI*2;n.position.set(e+Math.cos(a)*i,r+Math.sin(a)*i,s),n.rotation.z=a,n.updateMatrix(),o.setMatrixAt(t,n.matrix)}G.add(o)}n.add(G),n.add(new t.HemisphereLight(0xffffff,0xcfc9bd,.85));let j=new t.DirectionalLight(0xfff6e8,2.4);j.position.set(-8,12,8),j.castShadow=!0,j.shadow.mapSize.set(2048,2048),j.shadow.bias=-3e-4,j.shadow.normalBias=.04,Object.assign(j.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:1,far:38}),n.add(j);let K=new t.DirectionalLight(0xdfe9ff,.4);K.position.set(10,5,6),n.add(K);let X=new t.Mesh(T(new t.PlaneGeometry(160,160)),I);X.rotation.x=-Math.PI/2,X.position.y=-.86,X.receiveShadow=!0,G.add(X);let Y=new t.Mesh(T(new t.PlaneGeometry(160,22)),z);Y.position.set(0,10.14,-10),Y.receiveShadow=!0,G.add(Y);let $=new t.Mesh(T(new t.PlaneGeometry(160,22)),N);for(let[e,r]of($.rotation.y=-Math.PI/2,$.position.set(17,10.14,0),$.receiveShadow=!0,G.add($),[[-12,-9.4],[-4,-9.4],[4,-9.4],[12,-9.4]])){let i=new t.Mesh(T(new t.BoxGeometry(.9,22,.9)),N);i.position.set(e,10.14,r),i.castShadow=i.receiveShadow=!0,G.add(i)}O([13.2,.14,4.4],[.4,-.79,0],E);let q=Q([[-4,.45],[-2.7,.45],[2.6,3.2],[4,3.2],[4.375,2.825],[4,2.45],[2.6,2.45],[-2.7,-.3],[-4,-.3],[-4.375,.075]],!0),J=e=>.45+2.75*t.MathUtils.clamp((e+2.7)/5.3,0,1),Z=Math.round(q.getLength()/.235),ee=[{z:-.95,direction:-1},{z:.95,direction:1}].map(e=>{let r=new t.InstancedMesh(T(new t.BoxGeometry(.21,.07,1.2)),B,Z),i=new t.InstancedMesh(T(new t.BoxGeometry(.035,.2,1.2)),U,Z),s=new t.InstancedMesh(T(new t.BoxGeometry(.214,.074,.04)),F,2*Z),a=new t.InstancedMesh(T(new t.BoxGeometry(.19,.012,.014)),R,8*Z),o=new t.InstancedMesh(T(new t.CylinderGeometry(.055,.055,.1,14).rotateX(Math.PI/2)),F,2*Z),n=[r,i,s,a,o];for(let e of n)e.instanceMatrix.setUsage(t.DynamicDrawUsage),e.frustumCulled=!1,e.castShadow=e!==a,G.add(e);return{...e,treads:r,risers:i,edges:s,ribs:a,rollers:o,meshes:n}}),et=ee[1],er=[[-4.06,1.68],[-2.87,1.68],[2.43,4.42],[3.95,4.42],[4.25,4.17],[3.95,3.89],[2.61,3.89],[-2.7,1.15],[-4.06,1.15],[-4.31,1.4]],ei=[[-4.06,.6],[-2.65,.6],[2.65,3.35],[4,3.35],[4,4.4],[2.45,4.4],[-2.83,1.65],[-4.06,1.65]],es=[[-4.7,J(-4.7)-.1],[-2.7,J(-2.7)-.1],[2.6,J(2.6)-.1],[4.7,J(4.7)-.1],[4.7,J(4.7)-1.15],[2.6,J(2.6)-1.15],[-2.7,J(-2.7)-1.15],[-4.7,J(-4.7)-1.15]];for(let e of(W(ei,.4,-.2,E),W(es,.5,-.25,E),[-1.67,1.67]))W(ei,.03,e,L);for(let e of(W(es,.05,-1.7,E),W([[-4.15,.14],[-4.15,.55],[-2.65,.55],[2.65,3.3],[4.05,3.3],[4.05,2.8],[2.7,2.8],[-2.7,.14]],.1,-1.72,E),[-1.67,-.27,.27,1.67])){let t=Math.sign(e);if(H(Q(er,!0),.058,U,e,120,!0),H(Q(er.map(([e,t])=>[e,t+.048]),!0),.012,F,e,120,!0),Math.abs(e)>1&&H(Q([[-4,.6],[-2.7,.6],[2.6,3.35],[4,3.35]]),.016,D,e-.06*t,40),Math.abs(e)>1)for(let t of[-3.4,-2,-.6,.8,2.2,3.5])O([.05,1,.06],[t,J(t)+1.15,e],R)}let ea=[-4.6,-2.7,2.6,4.6],eo=e=>J(e)-.2;for(let e=0;e<3;e++)for(let t of[0,1.15-.1])V([ea[e],eo(ea[e])-t],[ea[e+1],eo(ea[e+1])-t],1.78,.08,R);let en=Array.from({length:14},(e,t)=>-4.4+.68*t);en.forEach((e,t)=>{V([e,eo(e)-1.15+.1],[e,eo(e)],1.78,.055,R);let r=en[t+1];if(void 0!==r){let i=t%2==0;V([e,eo(e)-(i?1.15-.1:0)],[r,eo(r)-(i?0:1.15-.1)],1.78,.05,R)}});for(let e=-4.2;e<=4.4;e+=1.4)O([.07,.07,1.7],[e,eo(e)-1.15+.1,et.z],R);for(let e of[-.5,.5])H(q,.028,A,et.z+e,220,!0);for(let e of(k(4,2.825,.33,et.z),k(-4,.075,.33,et.z),[-.95,.95])){O([1.6,.1,1.5],[-5.4,.53,e],E),O([.3,.05,1.3],[-4.45,.58,e],F);for(let t=0;t<9;t++)O([1.4,.012,.014],[-5.4,.59,e-.56+.14*t],R);O([.3,.05,1.3],[4.45,3.28,e],F),O([.45,.1,1.5],[4.8,3.2,e],E)}O([.62,.64,.66],[5.2,2.4,et.z+.3],R);let el=new t.Mesh(T(new t.CylinderGeometry(.3,.3,.95,28)),A);el.rotation.z=Math.PI/2,el.position.set(5.95,2.4,et.z+.3),el.castShadow=!0,G.add(el);for(let e=0;e<7;e++)O([.02,.62,.62],[5.6+.12*e,2.4,et.z+.3],R);O([.06,.08,.7],[6.48,2.4,et.z+.3],F),O([.12,1.05,3.4],[6.6,2.65,0],A),O([.8,.5,.5],[5.2,1.9,et.z-.45],A);let eh=new t.Object3D,ed=new t.Object3D,eu=new t.Matrix4,ef=new t.Vector3,ec=new t.Vector3;function ep(e,t,r,i,s){ed.position.set(r,i,s),ed.updateMatrix(),eu.multiplyMatrices(eh.matrix,ed.matrix),e.setMatrixAt(t,eu)}let em={handrail:new t.Vector3(2.3,4.5,1.67),step:new t.Vector3(.6,2.32,.95),drive:new t.Vector3(5.25,2.8,1.25)},eg=a?[...a.querySelectorAll("[data-anchor]")].flatMap(e=>em[e.dataset.anchor??""]?[{el:e,anchor:em[e.dataset.anchor??""]}]:[]):[],ev=new t.Vector3,eM="all",ew=!1,ex=!0,eb=!1,eT=!1,eS=0,e_=0,eC=0,eP=0,ey=1,eR=1,eE=0,eA=!1,eB=e.getBoundingClientRect(),eU=window.matchMedia("(prefers-reduced-motion: reduce)"),eF=window.matchMedia("(pointer: fine)"),eD=new t.Vector3(1,1.7,0),eL=new t.Vector3,eI=new t.Vector3;function ez(e=0){if(eb||eT)return;let r=e_?Math.min((e-e_)/1e3,.05):0;e_=e,ew||eU.matches||(eS+=r),"detail"===eM?(eI.set(2.5,4.6,8),eL.set(4.2,2.3,.6)):(eI.set(-9.5,4.6,10.5),eL.set(1,1.7,0));let i=Math.max(1,1.2/h.aspect)*(1+.18*eE);eI.sub(eL).multiplyScalar(i).add(eL);let s=ew||eU.matches?1:1-Math.exp(-(4*r));h.position.lerp(eI,s),eD.lerp(eL,s),h.lookAt(eD);let a=eU.matches||ew?0:.06*eC+.04*Math.sin(.22*eS)+.15*eE;G.rotation.y=t.MathUtils.lerp(G.rotation.y,a,s),G.rotation.x=t.MathUtils.lerp(G.rotation.x,eU.matches||ew?0:.02*eP,s);var o=eS;for(let e of ee){for(let r=0;r<Z;r++){let i=((r/Z+e.direction*o*.03)%1+1)%1;q.getPointAt(i,ef),q.getTangentAt(i,ec);let s=Math.PI*(1-t.MathUtils.smoothstep(ec.x,-.35,.35));eh.position.set(ef.x,ef.y,e.z),eh.rotation.set(0,0,e.direction>0?s:-s),eh.updateMatrix(),ep(e.treads,r,0,.1,0),ep(e.risers,r,-.1,.035,0),ep(e.edges,2*r,0,.1,-.59),ep(e.edges,2*r+1,0,.1,.59);for(let t=0;t<8;t++)ep(e.ribs,8*r+t,0,.143,-.5+.143*t);ep(e.rollers,2*r,0,0,-.5),ep(e.rollers,2*r+1,0,0,.5)}for(let t of e.meshes)t.instanceMatrix.needsUpdate=!0}for(let{el:e,anchor:t}of(c.render(),eg))ev.copy(t),G.localToWorld(ev),ev.project(h),e.style.transform=`translate(${(.5*ev.x+.5)*ey}px,${(-(.5*ev.y)+.5)*eR}px)`}function eN(){eT||eb||(e_=0,eA=!ew&&!eU.matches&&ex&&!document.hidden,o.setAnimationLoop(eA?ez:null),ex&&!document.hidden&&ez())}function eG(){ey=(eB=e.getBoundingClientRect()).width,eR=Math.max(eB.height,1),o.setPixelRatio(Math.min(window.devicePixelRatio,ey<600?1.25:1.65)),c.setPixelRatio(o.getPixelRatio()),c.setSize(Math.max(ey,1),Math.max(eB.height,1)),p.enabled=ey>=560,o.setSize(Math.max(ey,1),Math.max(eB.height,1)),h.aspect=ey/Math.max(eB.height,1),h.updateProjectionMatrix(),ez()}h.position.set(-9.5,4.6,10.5);let eO=new ResizeObserver(eG);eO.observe(e);let eV=new IntersectionObserver(([e])=>{ex=e.isIntersecting,eN()},{threshold:.01});function eQ(e){!eF.matches||ew||eU.matches||(eC=(e.clientX-eB.left)/eB.width-.5,eP=(e.clientY-eB.top)/eB.height-.5)}function eH(){eC=0,eP=0}function eW(e){e.preventDefault(),eT=!0,o.setAnimationLoop(null),i()}function ek(){eB=e.getBoundingClientRect(),eE=eU.matches?0:t.MathUtils.clamp(-eB.top/Math.max(window.innerHeight,1),0,1),eA||!ex||eb||eT||ez()}return eV.observe(e),e.addEventListener("pointermove",eQ),e.addEventListener("pointerleave",eH),o.domElement.addEventListener("webglcontextlost",eW),window.addEventListener("scroll",ek,{passive:!0}),document.addEventListener("visibilitychange",eN),eU.addEventListener("change",eN),eG(),eN(),{setView(e){eM=e,a&&(a.dataset.view=e),eN()},setPaused(e){ew=e,eN()},dispose(){eb=!0,o.setAnimationLoop(null),eO.disconnect(),eV.disconnect(),document.removeEventListener("visibilitychange",eN),eU.removeEventListener("change",eN),window.removeEventListener("scroll",ek),e.removeEventListener("pointermove",eQ),e.removeEventListener("pointerleave",eH),o.domElement.removeEventListener("webglcontextlost",eW),n.traverse(e=>{e instanceof t.InstancedMesh&&e.dispose()}),j.shadow.dispose(),x.forEach(e=>e.dispose()),c.dispose(),p.dispose(),m.forEach(e=>e.dispose()),M.forEach(e=>e.dispose()),f.dispose(),o.dispose(),o.forceContextLoss(),o.domElement.remove()}}}],1e3)}]);