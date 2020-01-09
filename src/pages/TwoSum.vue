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
        <div class="begin">当nums = [1, 2, 2, 7, 8, 11, 1, 8, 15], target = 9 时</div>
        <div class="btnBlock">
            <div class="btn" @click="search(nums, target)">列举所有组合</div>
        </div>

        <div class="result">result</div>
        <div v-for="(item, index) in resultArr" :key="index">{{item}}</div>
    </div>
</template>

<script>

    export default {
        name: 'two',
        data() {
            return {
                nums: [1, 2, 2, 7, 8, 11, 1, 8, 4, 5, 15],
                target: 9,
                englishDescription1: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.',
                englishDescription2: 'You may assume that each input would have exactly one solution, and you may not use the same element twice.',
                resultArr: null
            }
        },
        methods: {
            search(nums, target) {
                this.resultArr = this.twoSum(nums, target)
            },
            twoSum(nums, target) {
                let arr = [];
                for (let i = 0; i < nums.length; i++) {
                    for (let j = i + 1; j < nums.length; j++) {
                        if (nums[i] + nums[j] === target) {
                            arr.push([i, j])
                        }
                    }
                }
                return arr
                // let temp = [];
                // for (let i = 0; i < nums.length; i++) {
                //     let dif = target - nums[i];
                //     if (temp[dif] !== undefined) {
                //         console.log([temp[dif], i]) ;
                //     }
                //     temp[nums[i]] = i;
                // }
            }
        }
    }
</script>
<style scoped>

</style>
