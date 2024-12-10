import { defineField, ImageRule, Rule, SlugRule, StringRule } from "sanity";

export const postType = {
    name: "post",
    title: "Post",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule: StringRule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            validation: (Rule: SlugRule) => Rule.required(),
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            validation: (Rule: ImageRule) => Rule.required(),
        }),
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }],
        },
    ],
};

