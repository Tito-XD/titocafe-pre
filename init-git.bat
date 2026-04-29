@echo off
REM ============================================
REM  Tito's Cafe — Git 初始化 & 推送 GitHub
REM  在项目目录下运行（双击或在终端里执行）
REM  仓库: titocafe-pre   分支: huanuan
REM ============================================

set REPO=titocafe-pre
set BRANCH=hunyuan

echo.
echo [1/5] 检查 gh CLI 登录状态...
gh auth status
if errorlevel 1 (
    echo.
    echo [X] gh 未登录，请先执行: gh auth login
    pause
    exit /b 1
)

echo.
echo [2/5] 初始化 Git 仓库...
git init
git config user.name "Tito"
git config user.email "tito@users.noreply.github.com"

echo.
echo [3/5] 添加文件并提交...
git add .
git commit -m "feat: init Tito's Cafe site"

echo.
echo [4/5] 创建 GitHub 远程仓库并推送...
git branch -M %BRANCH%
gh repo create %REPO% --public --source=. --push --branch=%BRANCH%
if errorlevel 1 (
    echo.
    echo [!] 仓库可能已存在，尝试直接推送...
    for /f "tokens=*" %%i in ('gh api user --jq ".login"') do set USER=%%i
    git remote add origin https://github.com/%USER%/%REPO%.git 2>nul
    git push -u origin %BRANCH%
)

echo.
echo ============================================
echo  完成！仓库地址:
gh repo view %REPO% --web 2>nul
gh repo view %REPO%
echo ============================================
echo.
echo 下一步: 去 Netlify 连接此仓库即可部署
echo.
pause
