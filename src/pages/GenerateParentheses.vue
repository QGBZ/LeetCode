<template>
    <div class="page">
        <div class="questionTitle">Question Discription</div>
        <div class="questionContent">{{englishDescription1}}</div>
        <div class="questionExample">Example</div>
        <div class="questionContent"> For example, given n = 3, a solution set is:<br>
            [
            "((()))",
            "(()())",
            "(())()",
            "()(())",
            "()()()"
            ]
        </div>
        <div class="begin">
            n =
            <label>
                <input type="number" v-model="num">
            </label>
            时
        </div>
        <div class="btnBlock">
            <div class="btn" @click="generate">生成括号</div>
        </div>

        <div class="result">result</div>
        <div></div>
    </div>
</template>

<script>

    export default {
        name: 'two',
        data() {
            return {
                englishDescription1: 'Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.',
                num: 0
            }
        },
        methods: {
            generate() {
                let n = this.num;
                console.log(n)
            }
        }
    }
</script>
<style scoped>

</style>
