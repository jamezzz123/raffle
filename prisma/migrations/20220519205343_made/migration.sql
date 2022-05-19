-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RaffleDraw" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "RaffleDraw_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_RaffleDraw" ("code", "id", "userId") SELECT "code", "id", "userId" FROM "RaffleDraw";
DROP TABLE "RaffleDraw";
ALTER TABLE "new_RaffleDraw" RENAME TO "RaffleDraw";
CREATE UNIQUE INDEX "RaffleDraw_code_key" ON "RaffleDraw"("code");
CREATE UNIQUE INDEX "RaffleDraw_userId_key" ON "RaffleDraw"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
