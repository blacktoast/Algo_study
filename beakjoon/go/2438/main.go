package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	var reader *bufio.Reader = bufio.NewReader(os.Stdin)
	var writer *bufio.Writer = bufio.NewWriter(os.Stdout)

	// defer: 이를 호출한 함수의 리턴 직전에 실행한다.
    // Flush: 모든 데이터가 writer에 보내졌음을 의미 (꼭 써줘야한다!)
	defer writer.Flush()

	var n int

	fmt.Fscanln(reader, &n) 

	i :=1
	for ;i <= n;i++{
		fmt.Fprintln(writer, strings.Repeat("*",i  ) )
	}
}