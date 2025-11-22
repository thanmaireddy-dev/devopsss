/* 
1. Configure Git (First Time Setup)

When you install Git, you need to tell it who you are. These details are stored once on your computer.

git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
git config --list

2. Initialize a Local Repository
mkdir devops-lab
cd devops-lab
git init

3. Add Files and Commit Changes
echo "Hello DevOps" > readme.md
git status
git add readme.md
git commit -m "Initial commit: added readme"

4. View Commit History
git log
git log --oneline

5. Create and Manage Branches
git branch feature-1
git checkout feature-1
# or
git switch feature-1

6. Update Files and Merge Branch
echo "Adding feature work" >> readme.md
git add .
git commit -m "Updated readme in feature-1 branch"
git checkout main
git merge feature-1

7. Push to GitHub
Now you’ll connect your local Git repo to a remote GitHub repo.
Create a new repository on GitHub (no need to initialize with a README).
Connect it:

git remote add origin https://github.com/your-username/your-repo-name.git
git branch -M main
git push -u origin main

8. Clone Repository

git clone https://github.com/your-username/your-repo-name.git

9. Pull Latest Changes

git pull origin main

10. Connect to GitHub and Push Code (again)
If you ever lose your remote connection or work in a new repo:

git remote add origin https://github.com/your-username/your-repo-name.git
git branch -M main
git push -u origin main

*/