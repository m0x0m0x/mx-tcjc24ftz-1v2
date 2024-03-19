#!/usr/bin/env fish 
echo -e "Fish shell to copy all files to back directory by adding new extension .bak"
echo -e "Loop to run"
echo -e (set_color 00FF00)"for file in *.*"
echo -e (set_color 00FF00)" cp $file $file.bak"
echo -e (set_color 00FF00)"end"
echo "Press Y to continue or N to exit: "

# This is the choice prompt 
read -P "Enter your choice: " choice
switch $choice
    case Y y
        echo "Continuing..."
        # Add your continuation logic here
    case N n
        echo "Exiting..."
        # Add your exit logic here
    case '*'
        echo "Invalid choice"
end

# Actual code is here 
for file in *.*
    cp $file bak/$file.bak
end
ls -al bak/
echo (set_color 00FF00) "Done"


