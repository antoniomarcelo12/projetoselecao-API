-- CreateTable
CREATE TABLE "users" (
    "user_id" TEXT NOT NULL,
    "user_fullname" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "user_age" INTEGER NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_ocupation" TEXT NOT NULL,
    "user_phone" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_user_name_key" ON "users"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "users_user_email_key" ON "users"("user_email");
