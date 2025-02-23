import multer from "multer";

// Set up multer to store files in memory
const storage = multer.memoryStorage();

// Export a single file upload handler
export const singleUpload = multer({ storage }).single("file");
