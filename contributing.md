Thank you for your interest!

I need to add to a list of words for a word game I am building and contributions are welcome.

In order to contribute, you should have a good enough level of English pronunciation to do the task. You do NOT have to be a native speaker.

Please only make PRs that fit the criteria below.

I am looking for contributions to the `data/words.json` file in the following format:

```
        {
            "wordsToPlay": [ 
                "play",
                "say"
            ],

            "targetWords": [ 
                "say",
                "lie",
                "why",
                "flee",
                "real"
            ]
        },
```
IMPORTANT 
- The two words in the `wordsToPlay` array MUST rhyme - such as "play" and "say". 
- The second word in the  `wordsToPlay` array must also appear in the `targetWords` array. 
- The other 4 words in the `targetWords` array must NOT rhyme with it! In the example above, "play" only rhymes with one word in the `targetWords` array: "say".
- The order of words in `wordsToPlay` is IMPORTANT. The unique word must go first, and the word that will be repeated in `targetWords` must go second.
- The order of words in `targetWords` is not important as they will be randomised later. 

Many thanks for taking an interest! And if you have any questions, just reply in the issues and I will get back to you ASAP.

I will make sure I add the Hacktoberfest tags as appropriate!
