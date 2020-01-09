<template>
    <div class="page">
        <div class="questionTitle">Question Discription</div>
        <div class="questionContent">{{englishDescription1}}</div>
        <div class="questionContent">{{englishDescription2}}</div>
        <div class="questionExample">Example</div>
        <div class="questionContent"> Given nums = [2, 7, 11, 15], target = 9,<br>
            Because nums[0] + nums[1] = 2 + 7 = 9,<br>
            return [0, 1].
        </div>
        <div class="begin">当nums = [1, 2, 2, 7, 8, 11, 1, 15], target = 9 时</div>
        <button @click="twoSum(nums, target)">点击开始检索</button>
    </div>
</template>

<script>

    export default {
        name: 'two',
        data() {
            return {
                nums: [1, 2, 2, 7, 8, 11, 1, 15],
                target: 9,
                englishDescription1: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.',
                englishDescription2: 'You may assume that each input would have exactly one solution, and you may not use the same element twice.'
            }
        },
        methods: {
            twoSum(nums, target) {
                for (let i = 0; i < nums.length; i++) {
                    let otherNum = target - nums[i];
                    if (nums.indexOf(otherNum) > -1) {
                        if (nums.indexOf(otherNum) > i) {
                            let arr = [i, nums.indexOf(otherNum)];
                            console.log(arr)
                        }
                    }
                }
            }
        }
    }
</script>
<style scoped>
    .page {
        position: relative;
        width: 90%;
        left: 5%;
    }

    .questionTitle {
        position: relative;
        width: 100%;
        text-align: center;
        color: #4e77ab;
        font-size: 24px;
        line-height: 24px;
        margin-bottom: 2vh;
    }

    .questionContent {
        color: #2c3e50;
    }

    .questionExample {
        position: relative;
        width: 100%;
        margin-top: 2vh;
        margin-bottom: 1vh;
    }

    .begin {
        position: relative;
        margin-top: 2vh;
    }
</style>
