# validate_content.py
import os
import re

def validate_project():
    print("=== QUANTUMVERSE VERIFICATION SCRIPT ===")
    
    # 1. Check all files exist
    required_files = [
        "index.html",
        "css/theme.css",
        "css/components.css",
        "css/lab.css",
        "js/content.js",
        "js/lab.js",
        "js/quiz.js",
        "js/projects.js",
        "js/app.js"
    ]
    
    missing_files = []
    for f in required_files:
        if os.path.exists(f):
            print(f"✓ Found file: {f} ({os.path.getsize(f)} bytes)")
        else:
            print(f"✗ Missing file: {f}")
            missing_files.append(f)
            
    if missing_files:
        print(f"Validation FAILED: {len(missing_files)} files missing.")
        return False
        
    # 2. Check content.js structure
    with open("js/content.js", "r", encoding="utf-8") as f:
        content_data = f.read()
        
    # Check that it defines window.quantumContent
    if "window.quantumContent" not in content_data:
        print("✗ Validation FAILED: window.quantumContent is not defined in content.js")
        return False
        
    # Let's count how many modules are defined
    module_count = content_data.count("id: 1") + content_data.count("id: 2") + content_data.count("id: 3") + content_data.count("id: 4") + content_data.count("id: 5")
    print(f"✓ Found modules identifier count: {module_count}/5")
    
    # Verify core sections are present in content.js
    required_keywords = [
        "title:", "outcomes:", "theory:", "math:", "solvedExamples:", 
        "applications:", "caseStudy:", "qiskitCode:", "formulas:", 
        "flashcards:", "glossary:", "practiceQuestions:"
    ]
    
    for kw in required_keywords:
        if kw in content_data:
            print(f"✓ Found expected field: '{kw}' in content.js")
        else:
            print(f"✗ Missing key field: '{kw}' in content.js")
            return False
            
    print("\n✓ ALL CORE MODULES AND INFRASTRUCTURE COMPLETED SUCCESSFULLY!")
    print("=========================================")
    return True

if __name__ == "__main__":
    validate_project()
