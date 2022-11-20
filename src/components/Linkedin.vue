<script setup>
import Article from './ArticleDigital.vue';
</script>
<script>


import sanity from "../client";

const query = `*[_type == "digitalLinkedin"] | order(order asc) {
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
    <section id="linkedin">

        <div class='bubblewrap sticky'>
            <h3 class='bubble bg-orange'>LinkedIn</h3>
        </div>

        <div class="section-intro-text">
            <h2>LinkedIn</h2>
            LinkedIn (pronunciation: [ˌliŋkt.ˈɪn]), based in Sunnyvale, California, USA, is a social network for
            maintaining existing business contacts and making new business connections. LinkedIn is available in 24
            languages and has over 830 million users in 200 countries and regions. The U.S. leads with over 188 million
            users, followed by Europe with 138 million members, India with 88 million, and the People's Republic of
            China with 56 million. The company has been part of the Microsoft Group since December 8, 2016.
            <div class="source">
                <a href="https://de.wikipedia.org/wiki/LinkedIn">LinkedIn</a> on
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




