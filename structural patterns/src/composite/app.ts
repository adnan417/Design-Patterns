import { FileSystemComponent,MyFile,MyFolder } from "./FileSystem.js";

// Create leaf nodes
const file1 = new MyFile("Resume.pdf");
const file2 = new MyFile("CoverLetter.docx");
const file3 = new MyFile("Photo.png");

// Create composite nodes
const personalFolder = new MyFolder("Personal");
const photosFolder = new MyFolder("Photos");
const rootFolder = new MyFolder("Root");

// Build the tree
personalFolder.add(file1);
personalFolder.add(file2);
photosFolder.add(file3);
rootFolder.add(personalFolder);
rootFolder.add(photosFolder);

// Show structure
rootFolder.showDetails();
