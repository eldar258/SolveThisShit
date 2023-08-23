package main

import (
	"bufio"
	"bytes"
	"fmt"
	"os"
)

func printFiles() {
	entries, err := os.ReadDir("./")
	if err != nil {
		log.Fatal(err)
	}

	filter := map[string]int{}
	filter[".git"]++
	filter[".gitignore"]++
	filter[".gitlab-ci.yml"]++
	filter["go.mod"]++
	filter["README.md"]++

	for _, e := range entries {
		if e.IsDir() {
			fmt.Printf("DIRECTORY:%s\n", e.Name())
			continue
		}
		if filter[e.Name()] != 0 {
			continue
		}

		fmt.Println("FILE///////////////////////////////////////////////////")
		fmt.Println(e.Name())
		fmt.Println("START READ///////////////////////////////////////////////////")
		fi, err := os.ReadFile(e.Name())
		if err != nil {
			fmt.Println(err)
		}
		sc := bufio.NewScanner(bytes.NewReader(fi))
		for sc.Scan() {
			fmt.Println(sc.Text())
		}
		fmt.Println("END READ///////////////////////////////////////////////////")
		fmt.Println()
	}
}
