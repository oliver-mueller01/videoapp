-- CreateTable
CREATE TABLE "videoapp_videos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "thumbnail" TEXT,
    "uploadedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
