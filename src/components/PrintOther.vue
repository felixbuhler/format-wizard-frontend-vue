<script setup>
import Article from './Article.vue';
</script>
<script>


import sanity from "../client";

const query = `*[_type == "printOther"] | order(order asc) {
  _id,
  name,
  widthMm, heightMm, widthPx, heightPx, useCases, exampleProjects, aspectRatio, minSizePixel, recSizePixel, maxDuration, minDuration, framesPerSecond, maxFileSize, videoCodec,
  audioCodec, colorSpace, safeZone, safeZoneTop, safeZoneBottom, safeZoneLeft, safeZoneRight, furtherInformation
}[0...50]`;

export default {
    data() {
        return {
            loading: true,
            posts: [],
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.error = this.post = null;
            this.loading = true;
            sanity.fetch(query).then(
                (posts) => {
                    this.loading = false;
                    this.posts = posts;
                },
                (error) => {
                    this.error = error;
                }
            );
        },
    }
};

</script>
<template>
    <section id="other">

        <div class='bubblewrap sticky'>
            <h3 class='bubble bg-orange'>Print Other</h3>
        </div>

        <div class="section-intro-text">
            Die Deutsche Norm, die auf Walter Porstmann zurückgeht, diente mit ihren Festlegungen über die A‐ und
            B‐Reihe[13] als Grundlage für das europäische und internationale Äquivalent EN ISO 216, das wiederum in fast
            allen Ländern adaptiert worden ist. Unterschiede gibt es meist nur in den erlaubten Toleranzen. Als rein
            nationale Norm ist DIN 476-2:2008-02 Papier-Endformate – C‐Reihe noch gültig.
        </div>


        <article class="entry" :id="post.name.replace(/\s+/g, '-').toLowerCase()" v-for="post in posts" :key="post._id">
            <Article :entryName="post.name" :entryWidth="post.widthMm" :entryHeight="post.heightMm"
                :entryWidthPixel="post.widthPx" :entryHeightPixel="post.heightPx" :entryUseCases="post.useCases"
                :entryExampleProjects="post.exampleProjects" :entryAspectRatio="post.aspectRatio"
                :entryMinSizePixel="post.minSizePixel" :entryRecSizePixel="post.recSizePixel"
                :entryMaxDuration="post.maxDuration" :entryMinDuration="post.minDuration"
                :entryFramesPerSecond="post.framesPerSecond" :entryMaxFileSize="post.maxFileSize"
                :entryVideoCodec="post.videoCodec" :entryAudioCodec="post.audioCodec" :entryColorSpace="post.colorSpace"
                :entrySafeZone="post.safeZone" :entrySafeZoneTop="post.safeZoneTop"
                :entrySafeZoneBottom="post.safeZoneBottom" :entrySafeZoneLeft="post.safeZoneLeft"
                :entrySafeZoneRight="post.safeZoneRight" :entryFurtherInformation="post.furtherInformation" />
        </article>



    </section>
</template>




