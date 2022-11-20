<script setup>
import Article from './ArticleDigital.vue';
</script>
<script>


import sanity from "../client";

const query = `*[_type == "digitalFacebook"] | order(order asc) {
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
    <section id="facebook">

        <div class='bubblewrap sticky'>
            <h3 class='bubble bg-orange'>Facebook</h3>
        </div>

        <div class="section-intro-text">
            <h2>Facebook</h2>
            Facebook (proper spelling: facebook) is a social network operated by the U.S. company Meta Platforms. In
            2019, its revenue was $70.7 billion.

            Facebook allows the creation of private profiles to showcase oneself, pages for business or artistic
            presence, and groups to discuss common interests. Profiles can be interconnected through friend requests or
            subscriptions, with an unlimited number of subscribers (analogous to followers on Twitter), but a maximum
            limit of 5000 directly connected friends. In addition, Facebook offers a messenger as well as a development
            platform for creating application software. Facebook also offers a social networking service.
            <div class="source">
                <a href="https://de.wikipedia.org/wiki/Facebook">Facebook</a> on
                Wikipedia.
            </div>
        </div>


        <article class="entry" :id="post.name.replace(/\s+/g, '-').toLowerCase() + '-' + post._id"
            v-for="post in posts" :key="post._id">
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




