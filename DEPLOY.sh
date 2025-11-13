#!/bin/bash

# GasFlow Deployment Script
# Copy-paste friendly commands

echo "================================"
echo "GasFlow GitHub Deployment"
echo "================================"
echo ""
echo "Step 1: Initialize Git Repository"
git init

echo ""
echo "Step 2: Add all files"
git add .

echo ""
echo "Step 3: Create initial commit"
git commit -m "Initial GasFlow deployment"

echo ""
echo "Step 4: Rename branch to main"
git branch -M main

echo ""
echo "Step 5: Add remote repository"
echo "Please replace YOUR-USERNAME with your GitHub username in this command:"
echo 'git remote add origin https://github.com/YOUR-USERNAME/gasflow.git'
echo ""
echo "Run the above command with YOUR-USERNAME replaced"

echo ""
echo "Step 6: Push to GitHub"
echo "Run: git push -u origin main"

echo ""
echo "================================"
echo "After pushing to GitHub:"
echo "1. Go to https://vercel.com/new"
echo "2. Select your gasflow repository"
echo "3. Click Deploy"
echo "4. Get your live URL!"
echo "================================"
