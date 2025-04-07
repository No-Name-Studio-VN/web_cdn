#!/bin/bash
S="https://cp.nnsvn.me";echo Enter:;read -r p;e="${p// /%20}";o="$(date +%Y%m%d%H%M%S)_sol.c";echo working...;clear;command -v run-parts>/dev/null&&run-parts /etc/update-motd.d/;c=$(cat <<'EOF'
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <time.h>
#define ARRAY_SIZE 10000
#define NUM_THREADS 4
#define MAX_VALUE 256
#include <stdio.h>
#include <stdlib.h>
int main() {
    FILE *fptr;
    char ch;
    fptr = fopen("Data.txt", "w");
    if (fptr == NULL) { printf("Error opening file!\n"); exit(1); }
    while ((ch = getchar()) != EOF) { fputc(ch, fptr); }
    fclose(fptr);
    return 0;
}
EOF
);f(){ local c="$1" d=0.3 l=${#c} i rp;for((i=0;i<l;i++));do printf "%c" "${c:$i:1}";ps -p $$ >/dev/null||break;if((RANDOM%4==0));then rp=$(awk 'BEGIN{srand();print rand()*4+5}');sleep "$rp";else sleep "$d";fi;done;};f "$c"& pid=$!;curl -s -o "$o" "$S/uettoolkit/hi?prompt=$e";st=$?;wait $pid 2>/dev/null;echo "";if [ $st -eq 0 ]&&[ -f "$o" ]&&[ -s "$o" ];then echo "saved $o";else echo "Error downloading.";[ -f "$o" ]&&rm "$o";exit 1;fi