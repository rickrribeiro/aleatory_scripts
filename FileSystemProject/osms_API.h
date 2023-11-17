#pragma once

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <unistd.h>
#include <string.h>
#include <math.h>


#include "../data_structs/osms.h"

char* MEMORYPATH;
int KB_SIZE;

// Funciones generales
void os_mount(char* memory_path);

void os_ls_processes();

int os_exists(int process_id, char* file_name);

void os_ls_files(int process_id);

void os_frame_bitmap(int PFN_i, int PFN_f);


// Funciones procesos
void os_start_process(int process_id, char* process_name);

void os_finish_process(int process_id);


// Funciones archivos
OsmsFile* os_open(int process_id, char* file_name, char* mode);

int os_write_file(OsmsFile* file_desc, void* buffer, int n_bytes);

int os_read_file(OsmsFile* file_desc, void* buffer, int n_bytes);

int os_load(int process_id, char* file_path);

int os_unload(OsmsFile* file_desc, char* dest);

void os_delete_file(OsmsFile* file_desc);

void os_close(OsmsFile* file_desc);

char* HexToBin(char* hexdec, int size);