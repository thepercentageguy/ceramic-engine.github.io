// ceramic: multiTexture
Shader "textured"
{
	Properties
	{
		// ceramic: multiTexture/texture
		[PerRendererData] _MainTex ("Main Texture", 2D) = "white" {}
		_SrcBlendRgb ("Src Rgb", Float) = 0
     	_DstBlendRgb ("Dst Rgb", Float) = 0
		_SrcBlendAlpha ("Src Alpha", Float) = 0
     	_DstBlendAlpha ("Dst Alpha", Float) = 0
		_StencilComp ("Stencil Comp", Float) = 8
	}

	SubShader
	{
		Tags
		{
			"Queue"="Transparent" 
			"IgnoreProjector"="True" 
			"RenderType"="Transparent" 
			"PreviewType"="Plane"
			"CanUseSpriteAtlas"="True"
		}

		Cull Off
		Lighting Off
		ZWrite Off
		Blend [_SrcBlendRgb] [_DstBlendRgb], [_SrcBlendAlpha] [_DstBlendAlpha]

		Stencil {
			Ref 1
			Comp [_StencilComp]
		}

		Pass
		{
		CGPROGRAM
			#pragma vertex vert
			#pragma fragment frag
			#include "UnityCG.cginc"
			
			struct appdata_t
			{
				float4 vertex   : POSITION;
				float4 color    : COLOR;
				float2 texcoord : TEXCOORD0;
			};

			struct v2f
			{
				float4 vertex   : SV_POSITION;
				fixed4 color    : COLOR;
				// ceramic: multiTexture/textureIdStruct
				float2 texcoord  : TEXCOORD0;
			};

			v2f vert(appdata_t IN)
			{
				v2f OUT;
				OUT.vertex = UnityObjectToClipPos(IN.vertex.xyz);
				// ceramic: multiTexture/textureIdAssign
				OUT.texcoord = IN.texcoord;
				OUT.color = IN.color;

				return OUT;
			}

			// ceramic: multiTexture/texture
			sampler2D _MainTex;

			fixed4 frag(v2f IN) : SV_Target
			{
				fixed4 c;
				// ceramic: multiTexture/if
				c = tex2D(_MainTex, IN.texcoord);
				// ceramic: multiTexture/endif
				return c * IN.color;
			}
		ENDCG
		}
	}
}