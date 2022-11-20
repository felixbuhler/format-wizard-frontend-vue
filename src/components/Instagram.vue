<script setup>
import Article from './ArticleDigital.vue';
</script>
<script>


import sanity from "../client";

const query = `*[_type == "digitalInstagram"] | order(order asc) {
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
    <section id="instagram">

        <div class='bubblewrap sticky'>
            <h3 class='bubble bg-orange'>Instagram</h3>
        </div>

        <div class="section-intro-text">
            <h2>Instagram</h2>
            Instagram is a social network with a focus on video and photo sharing, operated by the company Meta
            Platforms. The core of the offering is a mixture of microblog and audiovisual platform. Users can edit their
            photos and videos and add filters. The network is financed by advertising. Most of the content is not
            available without an account.
            <div class="source">
                <a href="https://de.wikipedia.org/wiki/Instagram">Instagram</a> on
                Wikipedia.
            </div>
        </div>


        <article class="entry" :id="post.name.replace(/\s+/g, '-').toLowerCase() + '-' + post._id" v-for="post in posts"
            :key="post._id">
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




