#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/wait.h>
#include <sys/ipc.h>
#include <sys/shm.h>
#include <time.h>
#include <semaphore.h>

#define BUFFER_SIZE 5
#define NUM_ITEMS 20
#define SHM_KEY 0x4321

typedef struct
{
    int buffer[BUFFER_SIZE];
    // int count;
    sem_t mutex;
    sem_t filled;
    sem_t empty;
    int in;
    int out;
} SharedData;

void producer_process(SharedData *shared)
{
    /* int item;
    for (int i = 0; i < NUM_ITEMS; i++) {
        item = i + 1;

        if (shared->count >= BUFFER_SIZE) {
            printf("\nProducer (PID %d):Buffer FULL! %d.\n", getpid(), item);
        i--;
            sleep(10);
            continue;
        }

        shared->buffer[shared->in] = item;
        printf("Producer (PID %d): Produced %2d at index %d. ", getpid(), item, shared->in);
        shared->in = (shared->in + 1) % BUFFER_SIZE;
    sleep(5);
        shared->count++;
        printf("[COUNT: %d]\n", shared->count);

        //sleep(10);
    }
    exit(0);
*/
    while (1)
    {
        int item = rand();
        // check if buffer is full
        /*while(shared->empty == 0){
        };
        shared->empty--;
        */
        sem_wait(&shared->empty);
        sem_wait(&shared->mutex);
        // wait for mutex , before entering the critica section

        // enter critical section
        shared->buffer[shared->in] = item;
        printf("item produced : %d \n", item);
        shared->in = (shared->in + 1) % BUFFER_SIZE;
        sem_post(&shared->mutex);
        sem_post(&shared->filled);
    }
}

void consumer_process(SharedData *shared)
{
    while (1)
    {
        // check if buffer is empty or not
        /*while(shared->filled == 0){};
        shared->filled--;
    */
        sem_wait(&shared->filled);
        sem_wait(&shared->mutex);
        // wait for mutex
        /*while(shared->mutex == 0){};
        shared->mutex--;
    */
        // enter critical section;
        int item = shared->buffer[shared->out];
        shared->out = (shared->out + 1) % BUFFER_SIZE;
        printf("item consumed : %d \n", item);
        sem_post(&shared->mutex);
        sem_post(&shared->empty); 
    };
}

int main()
{
    int shmid;
    SharedData *shared;
    pid_t pid_prod, pid_cons;

    shmid = shmget(SHM_KEY, sizeof(SharedData), IPC_CREAT | 0666);
    shared = (SharedData *)shmat(shmid, NULL, 0);
    shared->in = 0;
    shared->out = 0;
    sem_init(&shared->filled, 1, 0);
    sem_init(&shared->empty, 1, BUFFER_SIZE);
    sem_init(&shared->mutex, 1, 1);
    printf("Parent PID: %d | Buffer Size: %d\n\n", getpid(), BUFFER_SIZE);

    pid_prod = fork();
    if (pid_prod == 0)
    {
        producer_process(shared);
    }
    pid_cons = fork();
    if (pid_cons == 0)
    {
        consumer_process(shared);
    }
    waitpid(pid_prod, NULL, 0);
    waitpid(pid_cons, NULL, 0);

    shmdt(shared);
    shmctl(shmid, IPC_RMID, NULL);

    printf("\n--- SIMULATION ENDED ---\n");
    // printf("Final State: Count = %d\n", shared->count);

    return 0;
}