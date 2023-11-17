#ifndef OSAPI
#define OSAPI

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <math.h>
#include <string.h>
#include <stdbool.h>

FILE* FSPath;

typedef struct OSFile {
  unsigned int id;
  char *name;
  unsigned int size;
  OSBlock *firstBlock;
}OSFile;

typedef struct OSBlock {
  unsigned int id;
  unsigned int size;
  OSBlock *nextBlock;
}OSBlock;


// test

void create_file_system(char* fileName);


// Generales
void os_mount(char* file);

void os_tree();

void os_bitmap(unsigned int num);

void os_ls(char* path);

int os_exists( char* path);

int os_mkdir(char *foldername, char *path);

void os_unmount();

// Archivos
OSFile* os_open(char* path, char mode);

void os_read(OSFile* file_desc, void* dest);

int os_write(OSFile* file_desc, void* path);

void os_close(OSFile* file_desc);

void os_rm(char* path);

void os_rmdir(char* path);

#endif
