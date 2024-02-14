#! /bin/bash

test() {
    deno task test main_test.ts >/dev/null 2>&1
}

pass_count=0
fail_count=0

pass() {
    pass_count=$((pass_count + 1))
    echo -e "\033[32mPASS\033[0m"
}

fail() {
    fail_count=$((fail_count + 1))
    echo -e "\033[31mFAIL\033[0m"
}

for run in {1..100}; do
    test && pass || fail
done

echo -e "\033[32mPass: $pass_count\033[0m"
echo -e "\033[31mFail: $fail_count\033[0m"
