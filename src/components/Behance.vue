<script setup>
import Article from './ArticleDigital.vue';
</script>
<script>


import sanity from "../client";

const query = `*[_type == "digitalBehance"] | order(order asc) {
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
    <section id="behance">

        <div class='bubblewrap sticky'>
            <h3 class='bubble bg-orange'>Behance</h3>
        </div>

        <div class="section-intro-text">
            <h2>Behance</h2>
            Behance (Bēhance) is a product of Adobe Inc. The online platform serves the presentation and discovery of
            creative works and was founded in September 2006 by Matias Corea and Scott Belsky. It is based in New York
            City, USA.
            People join Behance and create profiles consisting of projects. A project is a group of images, videos, and
            other digital content about a topic or process. It is similar to a portfolio. Each project has a unique URL
            that can be shared. For each project, it shows how many people have visited and »liked« the project.
            The other participants of Behance can follow a profile. When you follow someone, you are notified in case of
            an update.
            <div class="source">
                <a href="https://de.wikipedia.org/wiki/Behance">Bēhance</a> on
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




