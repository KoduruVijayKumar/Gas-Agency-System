#!/bin/bash

# GasFlow - GitHub & Vercel Deployment Script
# Run these commands one by one to deploy your website

echo "==================================="
echo "Gas Agency System - Deployment Guide"
echo "==================================="
echo ""

# STEP 1: GitHub Setup
echo "STEP 1: Initialize Git"
echo "Command: git init"
echo ""

echo "STEP 2: Add all files"
echo "Command: git add ."
echo ""

echo "STEP 3: Create first commit"
echo "Command: git commit -m 'Initial commit: Gas Agency System'"
echo ""

echo "STEP 4: Rename branch to main"
echo "Command: git branch -M main"
echo ""

echo "STEP 5: Add remote repository"
echo "Replace YOUR-USERNAME with your actual GitHub username!"
echo "Command: git remote add origin https://github.com/YOUR-USERNAME/gasflow.git"
echo ""

echo "STEP 6: Push to GitHub"
echo "Command: git push -u origin main"
echo ""

echo "==================================="
echo "After pushing to GitHub:"
echo "==================================="
echo ""
echo "1. Go to https://vercel.com/new"
echo "2. Click 'Import Git Repository'"
echo "3. Search for 'gasflow' or paste your GitHub URL"
echo "4. Click 'Import'"
echo "5. Click 'Deploy'"
echo "6. Wait 2-3 minutes"
echo "7. Get your live URL!"
echo ""
echo "Your website will be live at:"
echo "https://gasflow-YOUR-USERNAME.vercel.app"
echo ""
echo "==================================="
echo "For future updates, use:"
echo "==================================="
echo ""
echo "git add ."
echo "git commit -m 'Your changes description'"
echo "git push origin main"
echo ""
echo "Vercel will auto-deploy! 🚀"
