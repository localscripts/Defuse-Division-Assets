```ps
# --- CONFIG ---
$repoUrl = "https://github.com/localscripts/Defuse-Division-Assets.git"

# --- START FRESH (remove existing git history if present) ---
if (Test-Path ".git") {
  Remove-Item -Recurse -Force ".git"
}

# --- INIT + COMMIT EVERYTHING ---
git init
git add -A
git commit -m "Initial commit"

# --- CONNECT REMOTE ---
git branch -M main
git remote add origin $repoUrl

# --- SYNC WITH REMOTE (fixes "remote contains work you do not have") ---
git pull origin main --allow-unrelated-histories

# --- PUSH ---
git push -u origin main
```
then do :wq
