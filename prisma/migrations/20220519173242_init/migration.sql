-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "type_of_school" TEXT,
    "state_name" TEXT
);

-- CreateTable
CREATE TABLE "RaffleDraw" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "RaffleDraw_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_number_key" ON "User"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "RaffleDraw_code_key" ON "RaffleDraw"("code");

-- CreateIndex
CREATE UNIQUE INDEX "RaffleDraw_userId_key" ON "RaffleDraw"("userId");
