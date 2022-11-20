<script setup>
import Article from './ArticleDigital.vue';
</script>
<script>


import sanity from "../client";

const query = `*[_type == "digitalTiktok"] | order(order asc) {
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
    <section id="tiktok">

        <div class='bubblewrap sticky'>
            <h3 class='bubble bg-orange'>TikTok</h3>
        </div>

        <div class="section-intro-text">
            <h2>TikTok</h2>
            TikTok is a video portal for lip-syncing music videos and other short video clips, which additionally offers
            social network functions and is operated by the Chinese company ByteDance. In the People's Republic of
            China, it goes by the name Douyin (Chinese 抖音短视频, Pinyin Dǒuyīn duǎnshìpín – »Douyin short video«). It is
            available as a mobile app for Android and iOS operating systems.
            On August 2, 2018, the app TikTok became the successor of musical.ly. Since that year, it has been one of
            the fastest spreading mobile apps in the world and became leading short video platform in Asia with the
            largest playback video community in the world.
            <div class="source">
                <a href="https://de.wikipedia.org/wiki/TikTok">TikTok</a> on
                Wikipedia.
            </div>
        </div>


        <article class="entry" :id="post.name.replace(/\s+/g, '-').toLowerCase() + '-' + post._id" v-for="post in posts"
            :key="post._id">
            <Article :keyAnchor="post._id" :entryName="post.name" :entryWidth="post.widthMm"
                :entryHeight="post.heightMm" :entryWidthPixel="post.widthPx" :entryHeightPixel="post.heightPx"
                :entryUseCases="post.useCases" :entryExampleProjects="post.exampleProjects"
                :entryAspectRatio="post.aspectRatio" :entryMinSizePixel="post.minSizePixel"
                :entryRecSizePixel="post.recSizePixel" :entryMaxDuration="post.maxDuration"
                :entryMinDuration="post.minDuration" :entryFramesPerSecond="post.framesPerSecond"
                :entryMaxFileSize="post.maxFileSize" :entryVideoCodec="post.videoCodec"
                :entryAudioCodec="post.audioCodec" :entryColorSpace="post.colorSpace" :entrySafeZone="post.safeZone"
                :entrySafeZoneTop="post.safeZoneTop" :entrySafeZoneBottom="post.safeZoneBottom"
                :entrySafeZoneLeft="post.safeZoneLeft" :entrySafeZoneRight="post.safeZoneRight"
                :entryFurtherInformation="post.furtherInformation" />
        </article>



    </section>
</template>




