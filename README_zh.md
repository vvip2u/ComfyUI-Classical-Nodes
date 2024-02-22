# ComfyUI-Classical-Nodes
[ComfyUI](https://github.com/comfyanonymous/ComfyUI) 好用的自定节点整理

### ComfyUI
|名称|备注|
|---|---|
|[ComfyUI](https://github.com/comfyanonymous/ComfyUI)|主程|


### 自定义节点
||名称|备注|推荐指数|
|---|---|---|---|
|1|[ComfyUI-Manager](https://github.com/ltdrdata/ComfyUI-Manager)|管理工具|☆☆☆☆☆|
|2|[comfyui-workspace-manager](https://github.com/11cafe/comfyui-workspace-manager)|workflow管理工具|☆☆☆☆☆|
|3|[ComfyUI-AnimateDiff-Evolved](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)|AnimateDiff动画节点|☆☆☆☆|
|4|[ComfyUI_IPAdapter_plus](https://github.com/cubiq/ComfyUI_IPAdapter_plus)|IPAdapter节点|☆☆☆☆|
|5|[AIGODLIKE-ComfyUI-Translation](https://github.com/AIGODLIKE/AIGODLIKE-ComfyUI-Translation)|翻译节点|☆☆☆|
|6|[ComfyUI-InstantID](https://github.com/ZHO-ZHO-ZHO/ComfyUI-InstantID)|InstantID的实现|☆☆☆☆|
|7|[comfyui-reactor-node](https://github.com/Gourieff/comfyui-reactor-node)|换脸节点|☆☆☆☆|
|8|[ControlNet-LLLite-ComfyUI](https://github.com/kohya-ss/ControlNet-LLLite-ComfyUI)|ControlNet-LLLite的实现|☆☆☆|
|9|[efficiency-nodes-comfyui](https://github.com/jags111/efficiency-nodes-comfyui)|很好用的efficiency节点，支持的功能很多|☆☆☆☆☆|
|10|[was-node-suite-comfyui](https://github.com/WASasquatch/was-node-suite-comfyui)|超过190+节点的WAS库|☆☆☆☆|
|11|[comfyui-mixlab-nodes](https://github.com/shadowcz007/comfyui-mixlab-nodes)|支持workflow转APP|☆☆☆☆|
|12|[ComfyUI-Impact-Pack](https://github.com/ltdrdata/ComfyUI-Impact-Pack)|支持很多功能的节点|☆☆☆☆|
|13|[ComfyUI-Inspire-Pack](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)|支持XYZ功能的节点|☆☆☆|
|14|[comfyui_controlnet_aux](https://github.com/Fannovel16/comfyui_controlnet_aux)|Controlnet预处理节点|☆☆☆☆|
|15|[ComfyUI_Comfyroll_CustomNodes](https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes)|一些提升效率的基础节点|☆☆☆|
|16|[ComfyUI-Advanced-ControlNet](https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet)|controlnet执行节点|☆☆☆☆☆|
|17|[ComfyUI-AnimateLCM](https://github.com/dezi-ai/ComfyUI-AnimateLCM)|AnimateLCM的实现|☆☆☆|
|18|[ComfyUI_UltimateSDUpscale](https://github.com/ssitu/ComfyUI_UltimateSDUpscale)|放大器节点|☆☆☆|
|19|[comfyui_segment_anything](https://github.com/storyicon/comfyui_segment_anything)|语义分割节点|☆☆☆☆|
|20|[ComfyUI-post-processing-nodes](https://github.com/EllangoK/ComfyUI-post-processing-nodes)|后处理节点|☆☆☆☆|
|21|[ComfyUI-Frame-Interpolation](https://github.com/Fannovel16/ComfyUI-Frame-Interpolation)|动画补帧节点|☆☆☆☆|

### 安装节点 (批量)
#### 前提
已安装NodeJS

验证NodeJS环境
```
node --version
npm --version
```

### 修改ComfyUI安装路径
在custom_nodes下有个ComfyUI_path.txt，清空后填入你自己的ComfyUI的路径，像我这里是T:\ai\comfyui-portable\ComfyUI

### 安装节点
执行 run.bat 脚本

Windows
```
cd ComfyUI-Classical-Nodes
.\run.bat
```

Linux/MacOS
```
cd ComfyUI-Classical-Nodes
chmod +x run.sh
./run.sh
```

![ref installtion](ref_installation.png)
