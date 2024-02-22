const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const { exec } = require('child_process');

const filePath = path.join(__dirname, 'custom_nodes', 'custom-nodes.json');
const comfyUIPath = path.join(__dirname, 'custom_nodes', 'ComfyUI_path.txt');

let installationPath;

fs.readFile(comfyUIPath, 'utf8', (err, data) => {
  if (err) {
      console.error(err);
      return;
  }
  installationPath = data
})

// 读取json文件
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(`installationPath:   ${installationPath}`)
    if (installationPath === '/path/to/ComfyUI') {
      console.error('请修改 custom_nodes/ComfyUI_path.txt，保证ComfyUI路径正确后再执行run.b')
      return;
    }

    const nodes = JSON.parse(data);

    // 创建inquirer的问题列表
    const questions = nodes.map(node => ({
        type: 'confirm',
        name: node.name,
        message: `是否克隆 ${node.name} (${node.url})?`,
        default: false
    }));

    // 提示用户
    inquirer.prompt(questions).then(answers => {
        // 对于每个选中的项目，执行git clone
        nodes.forEach(node => {
            if (answers[node.name]) {
                nodes_dest_path = path.join(`${installationPath}`, 'custom_nodes', `${node.name}`)
                console.log(`开始克隆 【${node.name}】 ${node.url}`);
                console.log(`克隆目标地址 【${nodes_dest_path}】`);
                if (fs.existsSync(`${nodes_dest_path}`)) {
                  console.error(`【${node.name}】已经存在【${nodes_dest_path}】`);
                } else {
                  exec(`git clone ${node.url} ${nodes_dest_path}`, (err, stdout, stderr) => {
                      if (err) {
                          console.error(`克隆 ${node.url} 失败: ${err}`);
                          return;
                      }
                      console.log(`克隆 ${node.url} 成功:\n${stdout}`);
                  });
              }
            }
        });
        console.log('克隆完成，请重启ComfyUI');
    });
});
