#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Node 
{
    char ch;
    int freq;
    struct Node *left, *right;
};

struct Node* createNode(char ch, int freq) 
{
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));

    newNode->ch = ch;
    newNode->freq = freq;
    newNode->left = NULL;
    newNode->right = NULL;

    return newNode;
}

void sort(struct Node* nodes[], int n)
{
    int i, j;
    struct Node* temp;

    for (i = 0; i < n - 1; i++) 
    {
        for (j = i + 1; j < n; j++) 
        {
            if (nodes[i]->freq > nodes[j]->freq) 
            {
                temp = nodes[i];
                nodes[i] = nodes[j];
                nodes[j] = temp;
            }
        }
    }
}

struct Node* buildTree(char chars[], int freq[], int n) 
{
    struct Node* nodes[100];
    for (int i = 0; i < n; i++)
        nodes[i] = createNode(chars[i], freq[i]);
    int size = n;
    while (size > 1) 
    {
        sort(nodes, size);
        struct Node* left = nodes[0];
        struct Node* right = nodes[1];
        struct Node* parent = createNode('$', left->freq + right->freq);
        parent->left = left;
        parent->right = right;
        nodes[0] = parent;
        for (int i = 1; i < size - 1; i++)
        {
          nodes[i] = nodes[i + 1];
        }
        size--;
    }
    return nodes[0];
}

void generateCodes(struct Node* root, char code[], int depth,char codes[5][20], char chars[]) 
{
    if (root == NULL)
        return;
    if (root->left == NULL && root->right == NULL) 
    {
        code[depth] = '\0';
        for (int i = 0; i < 5; i++) 
        {
            if (chars[i] == root->ch) 
            {
                strcpy(codes[i], code);
                break;
            }
        }
        return;
    }
    code[depth] = '0';
    generateCodes(root->left, code, depth + 1, codes, chars);
    code[depth] = '1';
    generateCodes(root->right, code, depth + 1, codes, chars);
}

void decode(struct Node* root, char encoded[]) 
{
    struct Node* current = root;
    printf("\nDecoded Message: ");
    for (int i = 0; encoded[i] != '\0'; i++) 
    {
        if (encoded[i] == '0')
            current = current->left;
        else
            current = current->right;
        if (current->left == NULL &&
            current->right == NULL) 
            {
            printf("%c", current->ch);
            current = root;
        }
    }
    printf("\n");
}

int main() 
{

    char chars[] = {'M', 'N', 'O', 'P', 'Q'};
    int freq[] = {10, 15, 30, 16, 29};
    int n = 5;
    struct Node* root = buildTree(chars, freq, n);
    char codes[5][20];
    char code[20];
    generateCodes(root, code, 0, codes, chars);
    printf("Huffman Codes:\n");
    for (int i = 0; i < n; i++)
    printf("%c : %s\n", chars[i], codes[i]);
    char message[] = "MONOPQ";
    char encoded[100];
    encoded[0] = '\0';
    for (int i = 0; message[i] != '\0'; i++) 
    {
        for (int j = 0; j < n; j++) 
        {
            if (message[i] == chars[j]) 
            {
                strcat(encoded, codes[j]);
                break;
            }
        }
    }

    printf("\nMessage: %s", message);
    printf("\nEncoded Message: %s", encoded);
    printf("\nTotal Bits: %lu", strlen(encoded));
    decode(root, encoded);
    return 0;
}