#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.yourwebsite.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# coding 如果你想要部署到 https://USERNAME.github.io    git@e.coding.net:yuanchengcheng/yuanchengcheng/yuanchengcheng.git
git push -f git@e.coding.net:yuanchengcheng/yuanchengcheng/yuanchengcheng.git master
# 码云
# git push -f git@gitee.com:loveguo99/loveguo99.git master


# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages

cd -