# 邝天蕊｜个人简历与设计作品集

适用于 GitHub Pages 的静态个人主页，包含11组设计作品、25张可放大展板、科研经历、专利状态、竞赛荣誉、简历与作品集下载。

## 本地查看

双击 `index.html` 即可查看。请保留 `assets` 文件夹、`styles.css` 和 `script.js` 与网页的相对位置，不要只移动 HTML 文件。

## 发布到你的 GitHub 个人主页

目标账号：`dzm420427-sys`

目标仓库：`dzm420427-sys.github.io`

发布成功后的地址：`https://dzm420427-sys.github.io/`。这个地址需要完成以下设置才会上线。

1. 登录 GitHub，打开 [创建个人主页仓库](https://github.com/new?name=dzm420427-sys.github.io&description=Personal+resume+and+design+portfolio)。确认 Owner 是 `dzm420427-sys`，仓库名称为 `dzm420427-sys.github.io`，选择 Public，并开启 Add README，再点击 Create repository。如果该仓库已存在，请直接打开仓库。
2. 在仓库中选择 **Add file → Upload files**。解压交付的 ZIP，将其中的 `index.html`、`styles.css`、`script.js`、`assets` 文件夹及其他文件一起拖入上传区，点击 **Commit changes**。请上传解压后的内容，不是 ZIP；`index.html` 应直接位于仓库根目录。
3. 打开仓库 **Settings → Pages**。在 **Build and deployment** 中，将 Source 设为 **Deploy from a branch**，Branch 设为 **main**，文件夹设为 **/(root)**，点击 **Save**。
4. 等待发布完成。GitHub 文档说明发布可能需要最多约10分钟；Pages 设置页出现 **Visit site** 后即可打开网页。

后续修改网页或替换图片，只需提交到同一分支，GitHub Pages 会重新发布。

参考：[GitHub Pages 创建网站](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)、[发布来源设置](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

## 文件说明

- `index.html`：所有个人介绍、项目、科研和荣誉内容。
- `styles.css`：桌面、手机与打印样式。
- `script.js`：展板弹窗、上一张/下一张、键盘操作。
- `assets/*.webp`：从原始作品集导出的展示图。
- `assets/resume.pdf`：原始个人简历，含简历中的电话和邮箱。
- `assets/portfolio.pdf`：网页展示版作品集，31页，约6MB；保留设计作品及作品集目录，不含个人资料页与证书汇总页。
- `.nojekyll`：让 GitHub Pages 直接提供静态文件。若网页上传时没有显示该隐藏文件，本网站仍可由默认流程发布。

## 内容依据与展示范围

内容来自用户提供的《邝天蕊保研简历.pdf》《邝天蕊设计作品集.pdf》《邝天蕊设计作品集+个人材料.pdf》。个人材料用于核对学习及成果信息，未将成绩单、英语成绩报告、证书扫描件、学号和证件号码加入公开文件包。

科研与成果状态以简历为准：专业排名前10%、已获推免资格、2项外观设计专利已授权、1项实用新型专利在审、论文《家具》期刊在投。未把在审或在投成果表述为已授权或已发表，也未采用作品集中与简历口径不同的奖项总数。

“融护 CareSphere”标注为 AIGC 辅助概念设计；“Wooden Pup”标注为团队木作实践。项目简介是根据展板整理的内容摘要，未增加未经材料证明的量化效果、实验结果、项目职责或上线情况。

网页展示版作品集保留原展板画面，其中个别展板含原有二维码；网页没有新增指向这些二维码目标的链接。

## 后续维护

编辑 `index.html` 中对应文字即可更新经历。替换作品时建议保留文件名，或同时更新 HTML 中对应图片路径。更新毕业年份、推免状态和专利/论文状态后，再提交到 GitHub。

这是无需 Node.js、数据库、付费服务或构建步骤的静态网页。页面没有访问统计脚本或提交个人信息的表单。

作品及个人资料的权利归原权利人所有；此仓库未附加开源授权。
