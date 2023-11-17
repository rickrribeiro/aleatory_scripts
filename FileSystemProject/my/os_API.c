#include "os_API.h"


// void os_rm(char* path);

// void os_rmdir(char* path){
    
// }






int os_write(OSFile* file_desc, void* path){
    FILE *file;
    char *buffer;
    long file_size;

  
    file = fopen(path, "r");
    
    if (file == NULL) {
        fprintf(stderr, "Error opening the file.\n");
        return 1;
    }

    fseek(file, 0, SEEK_END);
    file_size = ftell(file);
    fseek(file, 0, SEEK_SET);

    buffer = (char *)malloc(file_size + 1);

    fread(buffer, 1, file_size, file);

    buffer[file_size] = '\0';

    fclose(file);

    // read bitmap and search for free blocks
    // write buffer
    // update the bitmap

    free(buffer);

    return 0;
}

char* os_open(char* path, char mode){
    FILE *file;

    file = fopen(fileName, "rb+");
    if (file == NULL) {
        printf("Error opening file!\n");
        return;
    }
    FSPath = file;
    return file;
}

void os_close() { 
    free(FSPath);
    *FSPath = NULL;
}

void os_read(OSFile* file_desc, char* dest){
    FILE* localFile = FSPath;
    if (localFile == NULL) {
        fprintf(stderr, "Error opening the destination file.\n");
        return;
    }

    OSBlock* currentBlock = file_desc->firstBlock;
    char* content = NULL;
    size_t totalSize = 0;

    while (currentBlock != NULL) {
        totalSize += currentBlock->size;
        currentBlock = currentBlock->nextBlock;
    }
   
    content = (char*)malloc(totalSize);
    if (content == NULL) {
        fprintf(stderr, "Memory allocation error.\n");
        fclose(localFile);
        return;
    }

    currentBlock = file_desc->firstBlock;
    size_t bytesRead = 0;
    while (currentBlock != NULL) {
        fseek(FSPath, (currentBlock->id + 256) * 1024, SEEK_SET);
        size_t bytesReadThisBlock = fread(content + bytesRead, 1, currentBlock->size, FSPath);
        bytesRead += bytesReadThisBlock;
        currentBlock = currentBlock->nextBlock;
    }

    fwrite(content, 1, totalSize, localFile);
    free(content);
    fclose(localFile);
}


// void os_read(OSFile* file_desc, char* dest){
//     FILE *file = FSPath;
//     FILE *localFile  = fopen(dest, "wb");
//     char *content;
//     while()
//     fseek(file, (OSFile->id+256)*1024, SEEK_SET); 
//     fread(content, 1, numberOfBytes, file);
//     fwrite(content, 1, 1, localFile);

//     fclose(localFile);
//     fclose(file);
// }



void create_file_system(char* fileName){

    FILE *file;
    long long size = 2LL * 1024 * 1024 * 1024;
    file = fopen(fileName, "wb");

    if (file == NULL) {
        printf("Error opening file!\n");
        return;
    }

    fseek(file, size - 1, SEEK_SET);

    fwrite("", 1, 1, file);

    fclose(file);

    printf("Empty file with size 2GB created successfully.\n");
	return;
}

void os_delete( OSFile *fileIndex) {
    FILE file = FSPath;
    do {
        fseek(file, fileIndex->pointerToNextBlock - fileIndex->pointerToNextBlock, SEEK_SET);
        char nullByte = '\0';
        fwrite(&nullByte, sizeof(char), 1, file);

        fseek(file, fileIndex->pointerToNextBlock - fileIndex->pointerToNextBlock, SEEK_SET);
        fread(fileIndex, sizeof(OSFile), 1, file);
    }while (fileIndex->pointerToNextBlock != NULL);
}